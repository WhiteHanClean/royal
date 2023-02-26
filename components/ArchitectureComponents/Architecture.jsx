import s from "./architecture.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sldie1 from "../../public/slide123.png";
import sldie2 from "../../public//slideR2.png";
import sldie3 from "../../public/sldieR3.png";
import sldie4 from "../../public/slideR4.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import slide from '../../assets/slideOne.jpg'
import slideTwo from '../../assets/slideTwo.jpg'
import slideThree from '../../assets/slideThree.jpg'
import slideFour from '../../assets/slideFour.jpg'

const Architecture = () => {
  const [open, setOpen] = useState(false);
  console.log(slide)
  return (
    <>
      <div className={s.container}>
        <div className={s.content} id="architecture">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100},
            }}
          >
            Архитектура
          </motion.h1>
          <div className={s.slider}></div>
          <div className={s.info}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={s.tag}
            >
              <div className={s.sliderR_block}>
                <div className={s.sliderR_slide}>
                  <Image
                    onClick={() => setOpen(true)}
                    className={s.sldie1}
                    src={sldie1}
                    alt="logo"
                  />
                  <Image onClick={() => setOpen(true)} className={s.sldie2} src={sldie2} alt="logo" />
                  <Image onClick={() => setOpen(true)} className={s.sldie3} src={sldie3} alt="logo" />
                </div>
                <Image onClick={() => setOpen(true)} className={s.sldie4} src={sldie4} alt="logo" />
              </div>{" "}
              <motion.a
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100},
              }}
              >Внешний облик жилого комплекса BROOKLYN</motion.a> - исполнен в
              американском стиле
            </motion.span>
            <br />
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100},
              }}
              className={s.under_tag}
            >
              <br />
              <a>Фасад:</a> “Вентилируемый фасад” <br />
              Корзины для кондиционерных блоков <br />
              Клинкерный кирпич из Германии <br />
              Широкоформатный керамогранит <br />
              Благородные натуральные камни <br />
              Много стекла и металла <br />
              Панорамные окна
            </motion.div>
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
              { src: slide.src },
              { src: slideTwo.src },
              { src: slideThree.src },
              { src: slideFour.src },
            ]}
            plugins={[Captions]}
          />
        </div>
      </div>
    </>
  );
};

export default Architecture;
