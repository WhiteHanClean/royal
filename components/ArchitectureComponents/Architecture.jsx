import s from "./architecture.module.scss";
import React from "react";
import { motion } from "framer-motion";

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
