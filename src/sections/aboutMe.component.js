import React from "react";


import fb from "../img/facebook.svg";
import web from "../img/website.svg";
import man from "../img/man-2.png";
import git from "../img/github.svg";
import ln from "../img/linkedin.svg";

function Aboutme() {
  return (
    <>
      <section id="about" className="about">
        <div className="container flex center">
          <div className="Left-con flex-1">
            <img className="about-img" src={man} alt="" />
          </div>
          <div className="Right-con flex-1">
            <h1>
              About <span>Me</span>
            </h1>
            <h4>Hello! I'm Shahriar Arafat</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              officiis porro enim distinctio! Ab reiciendis porro dolorem
              exercitationem, eligendi obcaecati neque quis explicabo soluta
              delectus rerum voluptatem nam facere tempore?
            </p>
            <div className="social-ima">
              <a href="/">
                <img
                  style={{ height: "24px", width: "24px" }}
                  src={web}
                  alt=""
                />
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
