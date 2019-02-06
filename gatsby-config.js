module.exports = {
  siteMetadata: {
    title: `Mihailizing`,
    author: 'Mihail Gaberov',
    description: 'Personal blog by Mihail Gaberov. Learning by sharing.',
    siteUrl: 'https://mihail-gaberov.eu/blog',
    social: {
      twitter: '@mihailgaberov',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
