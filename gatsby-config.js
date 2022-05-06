module.exports = {
    siteMetadata: {
        title: `Wondrous World of Whale Watching`,
        description: `Come and enjoy an experience of a lifetime! Watch whales with us!`,
        author: `@dofbileu`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
        keywords: `whales, marine life, trip, recreation`,
        image: `src/images/whale-watching.png`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/blog`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `My Smart-Home Guide`,
                short_name: `SH Guide`,
                description: `Guide for residents of the ABC123 Smart Home`,
                start_url: `/`,
                background_color: `#0a68f0`,
                theme_color: `#0a68f0`,
                display: `standalone`,
                icon: `src/images/pwa-icon.png`,
                icons: [
                    {
                        src: `/favicons/pwa-icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/pwa-icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-transformer-remark`,

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}