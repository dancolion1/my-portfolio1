import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import newfoli from "../../img/newfoli.jpg";
import { Gitub } from "@iconscout/react-unicons/icons/uil-github";

const Intro = () => {
  return (
    <div className="intro">

      <div className="i-name">
        <span>Hello! I Am </span>
        <span>OLEABHIELE DANIEL .D.</span>
        <span>
          A pragmatic, diligent and talented Fullstack Javascript Developer with high level of <br />Experience in web designing
          and development, producing quality work.
        </span>

        <div className="i-icons">
          <a href="https://github.com/dancolion1">
            <img src={Github} alt="github" />
            <p className="icon-text">Gitub</p>
          </a>
          <a href="https://www.linkedin.com/in/oleabhiele-daniel-donald">
            <img src={LinkedIn} alt="linkedin" />
            <p className="icon-text">LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/dancolion">
            <img src={instagram} alt="instgram" />
            <p className="icon-text">Instagram</p>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={newfoli} alt="profile" />
      </div>
    </div>
  );
};

export default Intro;