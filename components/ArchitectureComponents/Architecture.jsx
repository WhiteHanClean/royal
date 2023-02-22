﻿import s from "./architecture.module.scss";
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
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import slide from '../../assets/slideOne.jpg'
import slideTwo from '../../assets/slideTwo.jpg'
import slideThree from '../../assets/slideThree.jpg'
import slideFour from '../../assets/slideFour.jpg'

const Architecture = () => {
  const [open, setOpen] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(
    100
  );
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] = React.useState(
    100
  );
  const [scrollToZoom, setScrollToZoom] = React.useState(false);

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
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
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
              <a>Внешний облик жилого</a> комплекса <a>BROOKLYN</a> - исполнен в
              американском стиле
            </motion.span>
            <br />
            <motion.span
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
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
            </motion.span>
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            Keyboard
            slides={[
              { src: slide.src },
              { src: slideTwo.src },
              { src: slideThree.src },
              { src: slideFour.src },
            ]}
            plugins={[Captions, Zoom]}
            animation={{ zoom: animationDuration }}
            zoom={{
              maxZoomPixelRatio,
              zoomInMultiplier,
              doubleTapDelay,
              doubleClickDelay,
              doubleClickMaxStops,
              keyboardMoveDistance,
              wheelZoomDistanceFactor,
              pinchZoomDistanceFactor,
              scrollToZoom
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Architecture;
