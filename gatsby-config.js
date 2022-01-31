module.exports = {
  siteMetadata: {
    title: `개발자 블로그`,
    siteUrl: `https://wonjuny0804.github.io`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
  ],
};
