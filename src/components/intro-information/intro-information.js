import React from 'react';
import styles from './intro-information.module.css';
import GithubLogo from './github.svg';
import LinkedinLogo from './iconmonstr-linkedin-4.svg';
import EmailLogo from './iconmonstr-email-10.svg';
import { motion } from 'framer-motion';
import { socials } from '../motion-variants/socials-variant';
import { lefty } from '../motion-variants/left-content-variant';

export const IntroInformation = () => {
    return (
        <motion.div className={styles.introInformationContainer} initial="initial" animate="animate" transition={{delay: 1.25}} variants={lefty}>
            <div className={styles.introInformationName}>Hi I'm</div>
            <div className={styles.introInformationBox}>
                <div className={styles.introInformationBoxName}>Angelo Guerrero</div>
                <div className={styles.introInformationBoxExtra}>
                    <div>Dubai</div>
                    <div className={styles.line}></div>
                    <div className={styles.introInfoBoxExtraDesc}>
                        <div>Software Developer</div>
                        <div>Traveller</div>
                        <div>Activist</div>
                    </div>
                </div>
            </div>
            <div className={styles.introInfoLinksContainer}>
                <motion.a href="https://github.com/Xenithz" target="_blank" rel="noopener noreferrer" variants={socials} whileHover="whileHover" whileTap="whileTap">
                    <img src={GithubLogo} alt="swag" className={styles.logoSVG}></img>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/amcgdev/" target="_blank" rel="noopener noreferrer" variants={socials} whileHover="whileHover" whileTap="whileTap">
                    <img src={LinkedinLogo} alt="swag" className={styles.logoSVG}></img>
                </motion.a>
                <motion.a href="mailto:amcgdev@gmail.com" target="_blank" rel="noopener noreferrer" variants={socials} whileHover="whileHover" whileTap="whileTap">
                    <img src={EmailLogo} alt="swag" className={styles.logoSVG}></img>
                </motion.a>
            </div>
        </motion.div>
    );
}