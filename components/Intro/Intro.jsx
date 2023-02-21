import Image from "next/image";
import React, { useState } from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import AnimatedTextCharacter from "../AnimatedText/AnimatedText";
import s from "./Intro.module.scss";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Intro = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    console.log(window.pageYOffset);
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className={s.home}>
        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          loop
          style={{ width: "100%" }}
        >
          <source src="/mainS.mp4" />
        </video>

        <div className={s.home_bc}>
          <div>
            <AnimatedTextCharacter text={"Welcome to"} />
            <AnimatedTextCharacter text={"BROOKLYN"} />

            <div className={s.hr_home}>
              <hr />
            </div>

            <div className={s.text_home}>
              <AnimatedTextCharacterParagraph
                text={
                  "жилой комплекс сегмента бизнес+ для деловых и энергичных"
                }
              />
            </div>
          </div>
        </div>
        <div className={s.button_focus_fixed}>
          <button className={s.button_focus}>Связаться с нами</button>
        </div>
      </section>
    </>
  );
};

export default Intro;
