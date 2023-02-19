import Image from "next/image";
import React, { useState } from "react";
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
                <a href="#">Главная</a>
              </li>
              <li className={s.hedaer_link}>
                <a href="#">О нас</a>
              </li>
            </ul>
          </div>

          <div>
            <Image src="/logoRoyal.png" width={179} height={57} alt="logo" />
          </div>

          <div className={s.header_item}>
            <ul>
              <li className={s.hedaer_link}>
                <a href="#">Главная</a>
              </li>
              <li className={s.hedaer_link}>
                <a href="#">О нас</a>
              </li>
            </ul>
          </div>
          <div className={s.burger}>
            <label htmlFor="check">
              <input
                type="checkbox"
                onClick={() => setShowNav(!showNav)}
                id="check"
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </header>
      {showNav && <Sidebar show={showNav} />}
    </>
  );
};

export default Header;
