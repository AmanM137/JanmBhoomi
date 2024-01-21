import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import Fireworks from "./Fireworks";
import "../css/style.css";

function Home(props) {
  useEffect(() => {
    import("../css/bootstrap-3.min.css").then(() => {
      console.log("Importing boostrap");
    });

    import("../css/font-awesome-4.7.0/css/font-awesome.min.css").then(() => {
      console.log("Importing font-awesome");
    });

    // Import jQuery and Bootstrap
    import("../js/jquery-3.3.1.min.js").then(() => {
      console.log("Importing jquery-3.3.1.min.js");

      // Now that jQuery is loaded, you can proceed to import Bootstrap
      import("../js/bootstrap.min.js").then(() => {
        console.log("Importing bootstrap.min.js");
      });
    });

    import("../js/bonane.js").then(() => {
      console.log("Importing bonane.js");
    });
  }, []);
  return (
    <section className="gasy-content home-wrapper">
      <Navbar function1={props.function1} function2={props.function2} />
      <Fireworks />
      <Image className="hanuman1" src="/assets/download-removebg.png" />
      <Image
        className="hanuman2"
        src="/assets/download__1_-removebg-preview.png"
      />
      <Image
        className="hanuman3"
        src="/assets/hanuman_in_air-removebg-preview.png"
      />
      <Image
        className="hanuman4"
        src="/assets/cf098578-d074-4588-8e8a-438f71db1b38-removebg-preview.png"
      />
      <Image
        className="ram"
        src="/assets/Hindu_Temples.png"
      />
      <Image
        className="jaishriram"
        src="/assets/Jai_Shree_Ram_-_Salutation_to_Lord_Rama-removebg-preview.png"
      />
    </section>
  );
}
export default Home;
