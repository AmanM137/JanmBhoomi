import React from "react";

function Image(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}
export default Image;
