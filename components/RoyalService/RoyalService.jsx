import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import s from "./RoyalService.module.scss";
import { useEffect, useState } from "react";
import logoSecond from '../../public/logoSecond.png'
import secondStrana from '../../public/secondStrana.png'
import Group from '../../public/Group.png'
import zdanie from '../../public/zdanie.png'
const RoyalService = () => {
  return (
    <div className={s.royal_service} id="service">
      <div className={s.royalService}></div>
      <div className={s.bc_service}>
        <motion.div
          className={s.royal_logo}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image
            src={logoSecond}
            width={282}
            height={257}
            alt="logo"
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          className={s.title}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2>СТРОИМ КАК ДЛЯ СЕБЯ</h2>
        </motion.div>
        <div className={s.royal_service_content}>
          <motion.div
            className={s.content_item}
            initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
          >
            <Image
              className={s.content_img0}
              src={secondStrana}
              width={123}
              height={57}
              alt="logo"
              placeholder="blur"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </motion.div>
          <motion.div
            className={s.content_item}
            initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
          >
            <Image
              className={s.content_img1}
              src={Group}
              width={79}
              height={79}
              alt="logo"
              placeholder="blur"
            />

            <p>Более 3000
              довольных клиентов</p>
          </motion.div>
          <motion.div
            className={s.content_item}
            initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0 },
          }}
          >
            <Image
              className={s.content_img2}
              src={zdanie}
              width={73}
              height={73}
              alt="logo"
              placeholder="blur"
            />

            <p>Более 27
              успешных проектов</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoyalService;
