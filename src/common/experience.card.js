import React from "react";

function Card({ img, heading, text }) {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <h2>{heading}</h2>
        <div className="div-style">

        <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

