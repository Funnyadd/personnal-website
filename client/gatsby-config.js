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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/personal-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1338",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "nav",
          },
          {
            singularName: "about-counter",
          },
          {
            singularName: "education",
          },
          {
            singularName: "experience",
          },
          {
            singularName: "language",
          },
          {
            singularName: "project",
          },
          {
            singularName: "service",
          },
          {
            singularName: "skill",
          },
        ],
        singleTypes: [
          {
            singularName: "hero",
          },
          {
            singularName: "about",
          },
          {
            singularName: "my-contact",
          },
          {
            singularName: "my-project",
          },
          {
            singularName: "my-service",
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
  ],
}