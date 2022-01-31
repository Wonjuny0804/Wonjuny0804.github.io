import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  pageLayout,
} from "./layout.module.css";
import NavBar from "./NavBar/NavBar";

const Layout = ({ pageTitle, children, home }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={pageLayout}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <NavBar />

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
