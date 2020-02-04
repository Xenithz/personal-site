import React from 'react';
import styles from './about-me-tech.module.css';
import TechGrid from './Angelo_Grid.png';
import { motion } from 'framer-motion';
import { righty } from '../motion-variants/right-content-variant';

export const AboutMeTech = () => {
    return (
        <motion.div className={styles.techWrapper} initial="initial" animate="animate" transition={{delay: 1.75}} variants={righty}>
            <img src={TechGrid} alt="swag" className={styles.techGrid}></img>
        </motion.div>
    );
}