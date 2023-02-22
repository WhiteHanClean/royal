import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import s from "./RoyalService.module.scss";

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
          <Image src="/logoSecond.png" width={282} height={257} alt="logo" />
        </motion.div>

        <div className={s.royal_service_content}>
          <motion.div
            className={s.content_item}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100},
            }}
          >
            <Image
              className={s.content_img0}
              src="/secondStrana.png"
              width={123}
              height={57}
              alt="logo"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </motion.div>
          <motion.div
            className={s.content_item}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            <Image
              className={s.content_img1}
              src="/Group.png"
              width={79}
              height={79}
              alt="logo"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </motion.div>
          <motion.div
            className={s.content_item}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 1.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            <Image
              className={s.content_img2}
              src="/zdanie.png"
              width={73}
              height={73}
              alt="logo"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoyalService;
