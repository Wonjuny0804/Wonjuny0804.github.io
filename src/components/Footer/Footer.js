import React from "react";
import { mainStyle, logoButton, rightItems } from "./Footer.module.css";
import Github from "../../assets/GitHub-Mark-120px-plus.png";

const Footer = React.memo(() => {
  return (
    <footer className={mainStyle}>
      <span>© WonjunJang. All rights reserved.</span>
      <div className={rightItems}>
        <a href={"https://github.com/Wonjuny0804"} target="_blank">
          <img src={Github} alt="github image" className={logoButton} />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
