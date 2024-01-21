import React, { useState, useEffect, useRef } from "react";
import useSound from "use-sound";
import Home from "./Home";
import Heart from "./Heart";
import Gallery from "./Gallery";
import fireworks from "../Audio/SaezY - fireworks sound 2024-01-19 03_10.mp3";
import jaishreeram from "../Audio/Jai Shree Ram - Sms.mp3";
import ramayenge from "../Audio/SaezY - Ram ayenge 2024-01-21 22_49.mp3";
import ramchant from "../Audio/SaezY - Ram Chant 2024-01-21 22_49.mp3";

export default function App() {
  const [homepage, setPage1] = useState(true);
  const [gallerypage, setPage2] = useState(false);
  const [heartpage, setPage3] = useState(false);

  const [playFireworks, { stop: stopFireworks }] = useSound(fireworks, {
    volume: 1,
    soundEnabled: true,
    loop: true,
  });
  const [playJaishreeram, { stop: stopJaishreeram }] = useSound(jaishreeram, {
    soundEnabled: true,
  });
  const [playRamayenge, { stop: stopRamayenge }] = useSound(ramayenge, {
    volume: 0.5,
    soundEnabled: true,
    loop: true,
  });
  const [playRamchant, { stop: stopRamchant }] = useSound(ramchant, {
    volume: 0.5,
    soundEnabled: true,
    loop: true,
  });

  const fireworksRef = useRef(null);
  const jaishreeramRef = useRef(null);
  const ramayengeRef = useRef(null);
  const ramchantRef = useRef(null);

  useEffect(() => {
    if (homepage) {
      fireworksRef.current = playFireworks();
      const jaishreeramDelay = setTimeout(() => {
        jaishreeramRef.current = playJaishreeram();
      }, 1500);

      return () => {
        stopFireworks();
        clearTimeout(jaishreeramDelay);
        stopJaishreeram();
      };
    }
  }, [
    homepage,
    playFireworks,
    stopFireworks,
    playJaishreeram,
    stopJaishreeram,
  ]);

  useEffect(() => {
    if (gallerypage) {
      stopFireworks();
      stopJaishreeram();
      ramayengeRef.current = playRamayenge();
      return () => {
        stopRamayenge();
      };
    }
  }, [
    gallerypage,
    stopFireworks,
    stopJaishreeram,
    playRamayenge,
    stopRamayenge,
  ]);

  useEffect(() => {
    if (heartpage) {
      stopFireworks();
      stopJaishreeram();
      ramchantRef.current = playRamchant();
      return () => {
        stopRamchant();
      };
    }
  }, [heartpage, stopFireworks, stopJaishreeram, playRamchant, stopRamchant]);

  function homePage() {
    setPage1(true);
    setPage2(false);
    setPage3(false);
  }

  function galleryPage() {
    setPage1(false);
    setPage2(true);
    setPage3(false);
  }

  function heartPage() {
    setPage1(false);
    setPage2(false);
    setPage3(true);
  }

  return (
    <>
      {homepage && <Home function1={galleryPage} function2={heartPage} />}
      {gallerypage && <Gallery function={homePage} />}
      {heartpage && <Heart function={homePage} />}
    </>
  );
}
