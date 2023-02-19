import Image from "next/image";
import React, { useState } from "react";
import AnimatedTextCharacterParagraph from "../AnimatedText/AnimatedParagraph";
import { motion } from "framer-motion";
import s from "./Header.module.scss";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className={s.header}>
        <div className={s.header_container}>
          <div className={s.header_item}>
            <ul>
              <li className={s.hedaer_link}>
                <a href="#">
                  <AnimatedTextCharacterParagraph text={"Главная"} />
                </a>
              </li>
              <li className={s.hedaer_link}>
                <a href="#">
                  <AnimatedTextCharacterParagraph text={"О нас"} />
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
                  <AnimatedTextCharacterParagraph text={"Главная"} />
                </a>
              </li>
              <li className={s.hedaer_link}>
                <a href="#">
                  <AnimatedTextCharacterParagraph text={"О нас"} />
                </a>
              </li>
            </ul>
          </div>
          <motion.div
            className={s.burger}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, duration: 0.5 }}
          >
            <label htmlFor="check" >
              <input type="checkbox" id="check" className={s.check} onClick={() => setShowNav(!showNav)} />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </motion.div>
        </div>
      </header>
      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
