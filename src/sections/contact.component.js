import React from "react";

import phone from "../img/phone.svg";
import email from "../img/email.svg";
import map from "../img/map (2).svg";

function Contact() {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <h1 className="section-heading">
            Contact<span> Me</span>
          </h1>
          <p>
            We provide high standar clean website for your business solutions
          </p>
          <div className="cardWraper">
            <div className="card">
              <div className="img1">
                <img src={phone} alt="" />
              </div>
              <h1>Call On</h1>
              <h3>01641032348</h3>
            </div>

            <div className="card">
              <div className="img2">
                <img src={email} alt="" />
              </div>
              <h1>Email At</h1>
              <h3>shahriar.13913@gmail.com</h3>
            </div>

            <div className="card">
              <div className="img3">
                <img src={map} alt="" />
              </div>
              <h1>Visit Me</h1>
              <h3>52,North_Pirerbag Mirpur,1216</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
