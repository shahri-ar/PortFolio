import React from "react";
import work from "../img/ph-1.png";
import Workcard from "../common/work.card";

function Work() {
  return (
    <div>
      <section id="work" className="work">
        <div className="container">
          <h1 className="section-heading">
            <span>My</span> Work
          </h1>
          <p>We provide high stander clean website for business solution</p>

          <div className="cardWraper">

            <Workcard
              className={"card"}
              overLay={"overLay"}
              text={"Catagory"}
              Linktext={"Web Development"}
              img={work}
            />

            <Workcard
              className={"card"}
              overLay={"overLay"}
              text={"Catagory"}
              Linktext={"Web Development"}
              img={work}
            />

            <Workcard
              className={"card"}
              overLay={"overLay"}
              text={"Catagory"}
              Linktext={"Web Development"}
              img={work}
            />

            <Workcard
              className={"card"}
              overLay={"overLay"}
              text={"Catagory"}
              Linktext={"Web Development"}
              img={work}
            />

            <Workcard
              className={"card"}
              overLay={"overLay"}
              text={"Catagory"}
              Linktext={"Web Development"}
              img={work}
            />

            <Workcard
              className={"card"}
              overLay={"overLay"}
              text={"Catagory"}
              Linktext={"Web Development"}
              img={work}
            />
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
