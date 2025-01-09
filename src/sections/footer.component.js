import React from "react";

import logo from "../img/logo.svg";
import fb from "../img/facebook.svg";
import web from "../img/website.svg";
import git from "../img/github.svg";
import ln from "../img/linkedin.svg";

function Footer() {
  return (
    <div>
      <footer>
        <img src={logo} alt="" />

        <div className="social-ima">
          <a href="/">
            <img style={{ height: "24px", width: "24px" }} src={web} alt="" />
          </a>
          <a
            href="https://www.facebook.com/shahriar.arafat.sany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="" />
          </a>
          <a
            href="https://github.com/shahri-ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahriar-arafat-8650a9190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ln} alt="" />
          </a>
        </div>
        <p>Made by @ Shahriar</p>
      </footer>
    </div>
  );
}

export default Footer;
