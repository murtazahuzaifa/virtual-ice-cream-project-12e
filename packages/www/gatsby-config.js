require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `Virtual Ice-Cream`,
        description: `this is a project of creating virtual ice-cream your friend, get a url and share with him`,
        author: `Murtaza Hanzala`,
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        "gatsby-plugin-styled-components",
        {
            resolve: 'gatsby-source-graphql',
            options: {
                // This type will contain remote schema Query type
                typeName: 'ICECREAM',
                // This is field under which it's accessible
                fieldName: 'iceCream',
                // Url to query from
                url:
                    'http://localhost:8888/.netlify/functions/graphql',
            },
        },
    ]
}