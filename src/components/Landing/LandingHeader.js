import React from "react";
import NavBar from "../NavBar/NavBar";
import {
  headerWrapper,
  headerContent,
  headerTitle,
  headerLine,
} from "./LandingHeader.module.css";

const LandingHeader = () => {
  return (
    <div className={headerWrapper}>
      <NavBar />

      <div className={headerContent}>
        <h1 className={headerTitle}>개념 없는 개발 블로그</h1>
        <div className={headerLine}></div>
      </div>
    </div>
  );
};

export default LandingHeader;
