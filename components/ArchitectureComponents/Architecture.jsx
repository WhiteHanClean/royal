import s from "./architecture.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";

const Architecture = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <h1>Архитектура</h1>
                    <div className={s.slider}>
                        <Swiper
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/slide1.png" alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/slide2.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={s.info}>
                        <span className={s.tag}> <a>Внешний облик жилого</a> комплекса <a>BROOKLYN</a> - исполнен в американском стиле</span>
                        <br />
                        <span className={s.under_tag}>
                            <br />
                            <a>Фасад:</a> “Вентилируемый фасад” <br />
                            Корзины для кондиционерных блоков <br />
                            Клинкерный кирпич из Германии <br />
                            Широкоформатный керамогранит <br />
                            Благородные натуральные камни <br />
                            Много стекла и металла <br />
                            Панорамные окна
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Architecture;
