import React from "react";

function Image(props) {
  return <img className={props.className} src={process.env.PUBLIC_URL + '' + props.src} alt={props.alt} />;
}
export default Image;
