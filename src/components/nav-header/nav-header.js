import React from 'react';
import styles from './nav-header.module.css';
import HomeIcon from './iconmonstr-home-2.svg';

export const NavHeader = () => {
    return (
        <div className={styles.navWrapper}>
            <div className={styles.navHeader}>
                <img src={HomeIcon} alt="swag" className={styles.homeSVG}></img>
                <ul className={styles.navLinks}>
                    <li className={styles.link}>About Me</li>
                    <li className={styles.link}>Movements & Charities</li>
                </ul>
            </div>
        </div>
    );
}