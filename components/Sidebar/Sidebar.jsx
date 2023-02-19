import React from "react";
import cl from "classnames";
import { motion } from "framer-motion";



import s from "./Sidebar.module.scss";

const Sidebar = ({ show }) => {
  const variants = {
    open: { opacity: 1, ux: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { delay: 0.2, duration: 2 },
  };
  return (
    <>
      <motion.div
        initial={{
          x: "100%",
          opacity: 0,
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["100%", "100%", "50%", "50%", "0"],
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          borderRadius: 0,
          type: "spring",
          stiffness: 500,
        }}
        transition={{ delay: 0.2, duration: 2 }}
        className={show ? cl(s.sidenav, s.active) : s.sidenav}
        variants={variants}
      >
        <ul>
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.7 }}
            whileHover={{ scale: 1.1, transition: "0.4s" }}
          >
            <a href="">Жилой комплекс</a>
          </motion.li>
          <motion.li
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            whileHover={{ scale: 1.1, transition: "0.4s" }}
          >
            <a href="">Архитектура</a>
          </motion.li>

          <motion.li
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.4 }}
            whileHover={{ scale: 1.1, transition: "0.4s" }}
          >
            <a href="">Благоустройство</a>
          </motion.li>
          <motion.li
            initial={{ y: -20, opacity: -100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            whileHover={{ scale: 1.1, transition: "0" }}
          >
            <a href="">Планировки</a>
          </motion.li>
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            whileHover={{ scale: 1.1, transition: "0.4s" }}
          >
            <a href="">Расположение</a>
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default Sidebar;
