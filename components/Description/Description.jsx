import React from "react";
import style from "./Description.module.scss";
import Image from "next/image";
import background from '../../assets/backgroundDescription.jpg'
import logo from "../../assets/logo.png";
import image1 from "../../assets/iconDescriptionOne.png";
import image2 from "../../assets/iconDescriptionTwo.png";
import image3 from "../../assets/iconDescriptionThree.png";
import image4 from "../../assets/iconDescriptionFour.png";
import image5 from "../../assets/iconDescriptionFive.png";
import image6 from "../../assets/iconDescriptionSix.png";
import image7 from "../../assets/iconDescriptionSeven.png";
import image8 from "../../assets/iconDescriptionEight.png";
import image9 from "../../assets/iconDescriptionNine.png";
import image10 from "../../assets/iconDescriptionTen.png";

const Description = () => {
  return (
    <div className={style.main}>
      <div className={style.main__background}>
        <Image src={background}/>
      </div>
      <div className={style.main__background_opacity}></div>
      <div className={style.main__blocks}>
        <div className={style.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <nav className={style.main__blocks__block}>
          <Image src={image1} alt="description icon" />
          <h3>Гостевой и подземный паркинг</h3>
        </nav>
        <nav className={style.main__blocks__block}>
          <Image src={image2} alt="description icon" />
          <h3>Алюминиевые окна теплой серии</h3>
        </nav>
        <nav className={style.main__blocks__block}>
          <Image src={image3} alt="description icon" />
          <h3>Просторный двор</h3>
        </nav>
        <nav className={style.main__blocks__block}>
          <Image src={image4} alt="description icon" />
          <h3>Детская площадка европейского стандарта</h3>
        </nav>
        <nav className={style.main__blocks__block}>
          <Image src={image5} alt="description icon" />
          <h3>Полная газификация</h3>
        </nav>
        <aside className={style.main__blocks__block}>
          <Image src={image6} alt="description icon" />
          <h3>Круговая шумоизоляция от KNAUF Insulation</h3>
        </aside>
        <aside className={style.main__blocks__block}>
          <Image src={image7} alt="description icon" />
          <h3>Теплоизоляция наружных стен</h3>
        </aside>
        <aside className={style.main__blocks__block}>
          <Image src={image8} alt="description icon" />
          <h3>Центральное отопление</h3>
        </aside>
        <aside className={style.main__blocks__block}>
          <Image src={image9} alt="description icon" />
          <h3>Индивидуальная планировка</h3>
        </aside>
        <aside className={style.main__blocks__block}>
          <Image src={image10} alt="description icon" />
          <h3>В подъезде 2 лифта европейского стандарта</h3>
        </aside>
      </div>
    </div>
  );
};

export default Description;
