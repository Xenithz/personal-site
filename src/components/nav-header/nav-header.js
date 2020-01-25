import React from 'react';
import styles from './nav-header.module.css';
import HomeIcon from './iconmonstr-home-2.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NavHeader = () => {
    return (
        <motion.div className={styles.navWrapper} 
        initial={{
            opacity: 0,
            x: '-100%'
        }}
        animate={{
            opacity:1,
            x: '0%'
        }}
        transition={{ 
            delay: 1.5
        }}>
            <div className={styles.navHeader}>
                <Link to="/">
                    <img src={HomeIcon} alt="swag" className={styles.homeSVG}></img>
                </Link>
                <ul className={styles.navLinks}>
                    <Link className={styles.link} to="/aboutme">
                        <li>About Me</li>
                    </Link>
                    <Link className={styles.link} to="/moveandchar">
                        <li>Movements & Charities</li> 
                    </Link>
                </ul>
            </div>
        </motion.div>
    );
}