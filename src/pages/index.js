import * as React from "react";
import LandingHeader from "../components/Landing/LandingHeader";
import LandingBody from "../components/Landing/LandingBody";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import "../style/globals.css";
import { graphql } from "gatsby";
deckDeckGoHighlightElement();

const IndexPage = ({ data }) => {
  return (
    <main style={{ marginBottom: "100px" }}>
      <LandingHeader />
      <LandingBody posts={data.allMdx.nodes} />
    </main>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        slug
        frontmatter {
          date
          title
        }
        id
        excerpt
      }
    }
  }
`;

export default IndexPage;
