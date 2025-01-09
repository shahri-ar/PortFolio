import React from "react";

function Workcard({ className, text, link, img, overLay, Linktext }) {
  return (
    <div>
      <div className={className}>
        <div className={overLay}>
          <span>{text}</span>
          <a href={link}>{Linktext}</a>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Workcard;
