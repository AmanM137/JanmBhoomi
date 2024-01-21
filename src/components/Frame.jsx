import React from "react";

function Frame(props) {
  return (
    <svg>
      <filter id={props.id}>
        <feTurbulence
          x="0"
          y="0"
          baseFrequency={props.frequency}
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="20" />
      </filter>
    </svg>
  );
}
export default Frame;
