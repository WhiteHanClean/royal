import ResidentialSlider from "../ResidentialSlider/ResidentialSlider";
import style from "./ResidentialComplex.module.scss";
import { motion } from "framer-motion";

const ResidentialComplex = () => {
  return (
    <section className={style.main}>
      <div className="container">
        <div className={style.main__title}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            Жилой комплекс
          </motion.h2>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
          >
            BROOKLYN
          </motion.h2>
        </div>
        <ResidentialSlider />
          <motion.hr
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100},
            }}
          />
        <motion.h6
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}
        >
          ·Территория 1 га ·Этажность 16 ·Высота потолков от 3.1 до 3.45 <br />
          ·Начало строительства 4 квартал 2022 год
        </motion.h6>
      </div>
    </section>
  );
};

export default ResidentialComplex;
