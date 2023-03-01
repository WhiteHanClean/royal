import Image from "next/image";
import React, { useState } from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import AnimatedTextCharacter from "../AnimatedText/AnimatedText";
import s from "./Intro.module.scss";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import AnimatedLast from "../AnimatedText/AnimatedLast";

const Intro = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
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
          controls={false}
          autoPlay
          muted
          loop
          style={{ width: "100%" }}
        >
          <source src="/mainS.mp4" />
        </video>

        <div className={s.home_bc}>
          <div>
            <div className={s.intro_title}>
              <AnimatedTextCharacter text={"WELCOME TO"} />
            </div>
            <div className={s.intro_last_title}>
              <AnimatedLast text={"BROOKLYN"} />
            </div>
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
          <button className={s.button_focus}>
            <a href="https://wa.me/+996776111444?text=Здравствуйте,%20можно%20подробнее%20о%20жк%20Brooklyn">
              Связаться с нами
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Intro;
