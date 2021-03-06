/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-root-import`
  ],
  siteMetadata: {
    title: 'Ryan Brink',
    author: 'Ryan Brink',
    description: 'Portfolio website for Ryan Brink'
  }
}
