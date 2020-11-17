require('dotenv').config();
const { gql, ApolloServer } = require('apollo-server-lambda');
const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({ secret: process.env.VIRTUAL_ICE_CREAM_DB_KEY });

// Graphql Schema defination
const typeDefs = gql`
  type IceCream {
    id: ID!
    ts: Float!
    receiverName: String!
    senderName: String!
    message: String!
    iceCreamColor: IceCreamColor!
  }
  type IceCreamColor{
    color1: String
    color2: String
    color3: String
  }
  type Query {
    allIceCreams: [IceCream]!
  }
  type Mutation {
    addIceCream(receiverName:String!, senderName:String!, message:String!, color1:String!, color2:String!, color3:String!): IceCream!
  }
`

const resolvers = {
  Query: {
    allIceCreams: async (root, args, context) => {
      const result = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('ice-creams'))),
          q.Lambda(ref => q.Get(ref))
        )
      )
      return [
        ...result.data.map(({ data: { receiverName, senderName, message, iceCreamColor }, ts, ref }) => {
          return { receiverName, senderName, message, iceCreamColor, ts, id: ref.id }
        })
      ]
    }
  },
  Mutation: {
    addIceCream: async (root, { receiverName, senderName, message, color1, color2, color3 }, context) => {
      const result = await client.query(
        q.Create(q.Collection('ice-creams'), { data: { receiverName, senderName, message, iceCreamColor: { color1, color2, color3 } } },)
      );
      return {
        id: result.ref.id,
        ts: result.ts,
        receiverName: result.data.receiverName,
        senderName: result.data.senderName,
        message: result.data.message,
        iceCreamColor: result.data.iceCreamColor,
      }
    },
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
})

exports.handler = apolloServer.createHandler()


// exports.handler = apolloServer.createHandler({
//   cors:{
//     origin: "*",
//     credentials,
//   }
// })