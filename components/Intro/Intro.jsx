import React from "react";
import s from "./Intro.module.scss";

const Intro = () => {
  return (
    <div>
      <section className={s.home}></section>

      <div className={s.home_bc}>
        <h2>Welcome to</h2>
        <h1>BROOKLYN</h1>
        <div className={s.hr_home}>
        <hr />
        </div>
        <p>жилой комплекс сегмента бизнес+ для деловых и энергичных</p>
        
      </div>
    </div>
  );
};

export default Intro;
