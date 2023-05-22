import React from "react";
import s from "./location.module.scss";
import { motion } from "framer-motion";

const Location = () => {
    const mapURL = "https://yandex.ru/maps/-/CCUoiEv8gA"

    return (
        <>
            <div className={s.container}>
                <div className={s.content} id='location'>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: -50 },
                        }} I
                    >РАСПОЛОЖЕНИЕ</motion.h1>

                    <div className={s.map}>
                        <div id="map" className={s.ymap}></div>
                            <iframe
                                src={mapURL}
                                className={s.iframe}
                                width="100%"
                                height="400"
                                ></iframe>
                    </div>

                    <p>
                        Улица Медерова 44 / Жукеева Пудовкина
                    </p>
                </div>
            </div>
        </>
    );
};

export default Location;
