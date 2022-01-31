import * as React from "react";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
