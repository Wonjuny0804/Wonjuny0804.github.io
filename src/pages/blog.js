import * as React from "react";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import PostItem from "../components/blog/PostItem";
import { postList } from "../style/blog.module.css";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <section className={postList}>
        {data.allMdx.nodes.map((node, index) => (
          <div key={index}>
            <PostItem node={node} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date
        }
        id
        slug
        excerpt
      }
    }
  }
`;

export default BlogPage;
