import React from "react";
import Card from "../common/experience.card";

import brush from "../img/brush.svg";
import code from "../img/code.svg";
import media from "../img/media.svg";
import pc from "../img/pc.svg";
import phone from "../img/phone.svg";



function Experience() {
  return (
    <div>
      <section id="experience" className="services">
        <div className="container">
          <h1 className="section-heading">
            <span>My </span>Experience
          </h1>
          <p>description will be provided</p>
          <div className="cardWraper">
            <Card
            img={brush}
            heading={'HTML & CSS'}
            text={"amar o porano jaha cay , tomake banabo tai , tai goo , amar o porano jaha chay"}
            />
            <Card
            img={code}
            heading={'JavaScript ES6+'}
            text={"amar o porano jaha cay , tomake banabo tai , tai goo , amar o porano jaha chay"}
            />
            <Card
            img={media}
            heading={'REACT'}
            text={"amar o porano jaha cay , tomake banabo tai , tai goo , amar o porano jaha chay"}
            />
            <Card
            img={pc}
            heading={'git & github'}
            text={"amar o porano jaha cay , tomake banabo tai , tai goo , amar o porano jaha chay"}
            />
            <Card
            img={phone}
            heading={'Responsive Design'}
            text={"amar o porano jaha cay , tomake banabo tai , tai goo , amar o porano jaha chay"}
            />
            <Card
            img={brush}
            heading={'Graphs Design'}
            text={"amar o porano jaha cay , tomake banabo tai , tai goo , amar o porano jaha chay"}
            />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
