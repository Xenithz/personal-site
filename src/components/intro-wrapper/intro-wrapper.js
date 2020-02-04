import React from 'react';
import styles from './intro-wrapper.module.css'
import { IntroSvg } from '../intro-svg/intro-svg';
import { IntroInformation } from '../intro-information/intro-information';
import { motion } from 'framer-motion';

export const IntroWrapper = () => {
    return (
        <motion.div className={styles.introWrapper} exit={{
            x: '100vw'
        }}>
            <IntroSvg />
            <IntroInformation />
        </motion.div>
    );
}