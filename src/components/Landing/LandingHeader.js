import React from "react";
import NavBar from "../NavBar/NavBar";
import {
  headerWrapper,
  headerContent,
  headerTitle,
  headerLine,
  selfIntroduce,
  profileImage,
  selfContent,
} from "./LandingHeader.module.css";
import profileImg from "../../assets/wonjun-1.png";

const LandingHeader = () => {
  return (
    <div className={headerWrapper}>
      <NavBar />

      <div className={headerContent}>
        <h1 className={headerTitle}>개념 없는 개발 블로그</h1>
        <div className={headerLine}></div>
      </div>

      <section className={selfIntroduce}>
        <img src={profileImg} alt="profile image" className={profileImage} />
        <div className={selfContent}>
          <h2>Hallo, my name is Wonjun</h2>
          <p>A frontend Dev, who needed a writing space</p>
        </div>
      </section>
    </div>
  );
};

export default LandingHeader;
