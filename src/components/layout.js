import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { heading, pageLayout } from "./layout.module.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

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
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <NavBar />
      <main className={pageLayout}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
