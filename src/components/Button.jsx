import React from "react";
function Button(props) {
  return (
    <button className={props.className} type="button" onClick={props.function}>
      {props.text}
    </button>
  );
}
export default Button;
