import Image from "next/image";
import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer_info}>
          <div className={s.footer_item}>
            <Image
              src="/logoFooter.png"
              width={188}
              height={171}
              alt="footer_logo"
            />
            <p>Фактический адрес: г. Бишкек, ул. Коенкозова, 75</p>
          </div>
          <div className={s.footer_item}>
            <h4 className={s.title_footer}>Контакты</h4>
            <hr />
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Преимущества</a>
              </li>
              <li>
                <a href="#">Планировки</a>
              </li>
            </ul>
          </div>
          <div className={s.footer_item}>
            <h4 className={s.title_footer}>Информация</h4>
            <hr />
            <ul>
              <li>
                <a href="+996 776 111 444">+996 776 111 444</a>
              </li>
              <li>
                <a href="+996 556 111 444">+996 556 111 444</a>
              </li>
              <li>
                <a href="+996 706 111 444">+996 706 111 444</a>
              </li>
            </ul>
            <div className={s.ellipse_blocks}>
            <div className={s.ellipse}>
                <a href="#">
                  <Image
                    src="/Vector.png"
                    width={18}
                    height={18}
                    alt="footer_logo"
                  />
                </a>
              </div>
              <div className={s.ellipse}>
                <a href="#">
                  <Image
                    src="/insta.png"
                    width={18}
                    height={18}
                    alt="footer_logo"
                  />
                </a>
              </div>
              <div className={s.ellipse}>
                <a href="#">
                  <Image
                    src="/facebook.png"
                    width={18}
                    height={18}
                    alt="footer_logo"
                  />
                </a>
              </div>
              <div className={s.ellipse}>
                <a href="#">
                  <Image
                    src="/youtube.png"
                    width={22}
                    height={16}
                    alt="footer_logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className={s.unis}/>
        <div className={s.contact_footer}>
          2022 © ОсОО "Роял Констракшн". Юридический адрес: Кыргызская
          Республика, г. Бишкек, ул. Рыскулова, 79Б
        </div>
      </div>
    </footer>
  );
};

export default Footer;
