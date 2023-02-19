import Image from "next/image";
import React from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_item}>
          <ul>
            <li className={s.hedaer_link}>
              <a href="#">
              <AnimatedTextCharacterParagraph text={'Главная'}/>
              
                </a>
            </li>
            <li className={s.hedaer_link}>
              <a href="#">
              <AnimatedTextCharacterParagraph text={'О нас'}/>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Image src="/logoRoyal.png" width={179} height={57} alt="logo" />
        </div>

        <div className={s.header_item}>
          <ul>
            <li className={s.hedaer_link}>
              <a href="#">
              <AnimatedTextCharacterParagraph text={'Главная'}/>
</a>
            </li>
            <li className={s.hedaer_link}>
              <a href="#">
              <AnimatedTextCharacterParagraph text={'О нас'}/>
</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
