import React from "react";
import Image from "./Image";

function Card(props) {
  return (
    <div className="card">
      <div className="image image1"></div>
      <div className="info">
        <Image src={props.src} alt={props.alt} />
        <p>
          {props.text1}
          <span>{props.span}</span>
          {props.text2}
        </p>
      </div>
    </div>
  );
}
export default Card;
