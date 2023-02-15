import Image from "next/image";
import React from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import AnimatedTextCharacter from "../AnimatedText/AnimatedText";
import s from "./Intro.module.scss";

const Intro = () => {
  return (
    <>
      <section className={s.home}>

        <div className={s.home_bc}>
          <AnimatedTextCharacter text={"Welcome to"} />
          <AnimatedTextCharacter text={"BROOKLYN"} />

          <div className={s.hr_home}>
            <hr />
          </div>

          <div className={s.text_home}>
            <AnimatedTextCharacterParagraph
              text={"жилой комплекс сегмента бизнес+ для деловых и энергичных"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
