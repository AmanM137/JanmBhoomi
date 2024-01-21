import React from "react";
import Image from "./Image";
import Button from "./Button";

function Navbar(props) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center text-center">
        <Button
          className="btn btn-sm btn-outline-secondary"
          function={props.function1}
          text="Ram Ka Dham"
        />
        <Image className="navimg" src="./assets/shree-ram-nawami-03.png" />
        <Button
          className="btn btn-sm btn-outline-secondary"
          function={props.function2}
          text="Our Heartbeat"
        />
      </div>
      <hr />
    </nav>
  );
}
export default Navbar;
