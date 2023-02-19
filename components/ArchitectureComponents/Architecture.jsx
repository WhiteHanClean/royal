import s from "./architecture.module.scss";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import slide1 from '../../public/slide1.png'
import slide2 from '../../public/slide2.png'
import slide3 from '../../public/slide3.png'
import slide4 from '../../public/slide4.png'

const images = [
    {
        src: slide1,
        alt: 'slide1'
    },
    {
        src: slide2,
        alt: 'slide2'
    },
    {
        src: slide3,
        alt: 'slide3'
    },
    {
        src: slide4,
        alt: 'slide4'
    },
]

const Architecture = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
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
                    <div className={s.slider}>
                        <SlideshowLightbox fullScreen={true} imgAnimation="fade" className={s.image} lightboxIdentifier="lightbox1" framework="next" images={images}>
                            {images.map((image) => (
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    data-lightboxjs="lightbox1"
                                    quality={100}
                                />
                            ))}
                        </SlideshowLightbox>
                    </div>
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
                            {" "}
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
                </div>
            </div>
        </>
    );
};

export default Architecture;
