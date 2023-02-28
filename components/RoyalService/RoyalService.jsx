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
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
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

        <div className={s.royal_service_content}>
          <motion.div
            className={s.content_item}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.01, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, y: 0 },
              hidden: { opacity: 0, x: -100 },
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
            transition={{ duration: 0.01, delay: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
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

            <p>На рынке Кыргызстана с 2012 года</p>
          </motion.div>
          <motion.div
            className={s.content_item}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.01, delay: 1.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
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

            <p>На рынке Кыргызстана с 2012 года</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoyalService;
