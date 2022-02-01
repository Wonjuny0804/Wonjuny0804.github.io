import React from "react";
import { Link } from "gatsby";
import { navItem, navItems, navBar, colorRender } from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={navBar}>
      <ul className={navItems}>
        <li>
          <Link to="/" className={navItem}>
            No 개념 <span className={colorRender}>Research</span> Blog
          </Link>
        </li>
        <li>
          <Link to="/blog" className={navItem}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
