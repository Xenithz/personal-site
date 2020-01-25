import React from 'react';
import styles from './intro-wrapper.module.css'
import { IntroSvg } from '../intro-svg/intro-svg';
import { IntroInformation } from '../intro-information/intro-information';

export const IntroWrapper = () => {
    return (
        <div className={styles.introWrapper}>
            <IntroInformation />
            <IntroSvg />
        </div>
    );
}