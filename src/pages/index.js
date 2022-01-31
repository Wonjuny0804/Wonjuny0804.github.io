import * as React from "react";
import LandingHeader from "../components/Landing/LandingHeader";
import LandingBody from "../components/Landing/LandingBody";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import "../style/globals.css";
deckDeckGoHighlightElement();

const IndexPage = () => {
  return (
    <main>
      <LandingHeader />
      <LandingBody />
    </main>
  );
};

export default IndexPage;
