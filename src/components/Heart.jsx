import React, { useEffect } from "react";
import Button from "./Button";
import "../css/heart.css";

function Heart(props) {
  return (
    <div className="heart-wrapper">
      <h1 className="main-quote">My heart beats with the rhythm of Ram.</h1>
      <div className="heart" id="heart">
        <span>RAM</span>
      </div>

      <Button className="goback2" function={props.function} text="Go Back" />
    </div>
  );
}
export default Heart;
