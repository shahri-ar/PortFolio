import React from "react";
import hero from "../img/man.png";
import { downloadFile } from "../common/downloadCv";
import Button from "../common/button.component";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div id="home" className="hero flex center justify">
            <div className="left flex-1 flex justify-center">
              <img src={hero} alt="" />
            </div>
            <div className="Rhero flex-1">
              <h6>Shahriar Arafat</h6>
              <h1>
                I am a Creative <span>Designer</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                praesentium expedita cum! Soluta dolor officia eum iure, modi
                dolorem! In eum quo doloribus quibusdam error excepturi
                voluptatum natus inventore atque.
              </p>
              <div>
                <Button
                event={()=>downloadFile()}
                className={"btn btn-secondary"}
                text={"DOWNLOAD CV"}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
