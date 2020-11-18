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
                typeName: 'VIRTUALICECREAM',
                // This is field under which it's accessible
                fieldName: 'virtualIceCream',
                // Url to query from
                url:'https://virtual-ice-cream-by-murtaza.netlify.app/.netlify/functions/graphql',
            },
        },
    ]
}