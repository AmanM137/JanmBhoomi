import React from "react";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Frame from "./Frame.jsx";
import "../css/gallery.css";

function Gallery(props) {
  return (
    <div className="gallery-wrapper gallery-content">
      <div className="textt">
        <h1>Click on Frames to see the struggle</h1>
        <Button className="goback1" function={props.function} text="Go Back" />
      </div>
      <div className="container">
        <Card
          src="https://cdn.thewire.in/wp-content/uploads/2019/12/05232353/Babri-Masjid-British-musuem-1199x600.jpg"
          alt="Babri Masjid in 1900"
          text1="This is "
          span="the Babri Masjid, built over the birthplace of Lord Rama, "
          text2="existed for decades."
        />

        <Card
          src="https://thefederal.com/file/2020/07/Artboard-1-copy.jpg"
          alt="Rama idol inside Babri Masjid"
          span="Shriram idol was placed inside Babri Masjid in 1949"
          text2=" stayed until its demolition."
        />

        <Card
          src="https://cdn.thewire.in/wp-content/uploads/2019/11/10160006/D45kJ1PXkAE2Dmv.jpeg"
          alt="1990 Rath Yatra"
          span="In September 1990, L.K. Advani led the Rath Yatra"
          text2=" to advocate Ram Mandir construction."
        />

        <Card
          src="https://s02.sgp1.cdn.digitaloceanspaces.com/article/70630-ulxmdmegtz-1571241573.jpg"
          alt="Babri Masjid demolition"
          span="On December 6, 1992, "
          text2="a large gathering of Karsevaks demolished the Babri Masjid."
        />

        <Card
          src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2018/09/12/35123-ayodhya-20171208120617.jpg?imwidth=1920"
          alt="Imprisoned Lord Ram"
          text1="In 1993, "
          span="the government banned"
          text2=" any religious construction at the disputed site."
        />

        <Card
          src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/tvdaijiworld/images6/allwyn_091119_ayodhya1.jpg"
          alt="SC Ayodhya verdict"
          text1="In 2019, "
          span="Supreme Court favored Ram Mandir construction,"
          text2=" allocated alternative land for a mosque."
        />

        <Card
          src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/08/06/Pictures/prime-minister-narendra-bhoomi-takes-pujan-temple_4f3a31a6-d78a-11ea-a162-aa5ffaaa8aa4.jpg"
          alt="Ram Mandir Bhoomipujan"
          span="On August 5, 2020, Bhoomi Pujan"
          text2=" marked the beginning of Ram Mandir construction."
        />

        <Card
          src="https://i.pinimg.com/736x/a5/48/ac/a548acd294370cd590e111edda893c30.jpg"
          alt="Ram Mandir"
          text1="n January 22, 2023, "
          span="the 'Pran Pratishtha' ceremony"
          text2=" will take place at Ram Mandir."
        />
        <Frame id="wavy1" frequency="0.2" />
        <Frame id="wavy2" frequency="0.02" />
        <Frame id="wavy3" frequency="0.1" />
      </div>
    </div>
  );
}
export default Gallery;
