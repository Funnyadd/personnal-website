require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Professional E-Portoflio`,
        description: `Professional E-Portoflio of Adam Mihajlovic. This website shows the work that I've done so far.`,
        author: `Adam Mihajlovic`,
        siteUrl: `https://adammihajlovic.ca`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Professional E-Portoflio of Adam Mihajlovic`,
                short_name: `Professional E-Portoflio`,
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
            }
          }
    ]
}
