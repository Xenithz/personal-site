import React from 'react';
import styles from './about-me-wrapper.module.css';
import { AboutMeInformation } from '../about-me-information/about-me-information';
import { AboutMeTech } from '../about-me-tech/about-me-tech';
import { motion } from 'framer-motion';

export const AboutMeWrapper = () => {
    return (
        <motion.div className={styles.aboutMeWrapper} exit={{
            x: '100vw'
        }}>
            <AboutMeInformation />
            <AboutMeTech />
        </motion.div>
    );
}