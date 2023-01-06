require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Personal website`,
        description: `Personal website of Adam Mihajlovic`,
        author: `Adam Mihajlovic`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Personal Website of Adam Mihajlovic`,
                short_name: `Personal Website`,
                start_url: `/`,
                background_color: `#0c9400`,
                theme_color: `#0c9400`,
                display: `minimal-ui`,
                icon: `src/images/personal-logo.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: ["G-G3VTCJ7KQL"]
            },
          },
    ],
}
