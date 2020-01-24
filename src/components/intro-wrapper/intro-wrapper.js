import React from 'react';
import styles from './intro-wrapper.module.css'
import { IntroSvg } from '../intro-svg/intro-svg';
import { IntroInformation } from '../intro-information/intro-information';
import Particles from 'react-particles-js';
import config from './particlesjs-config.json';

export const IntroWrapper = () => {
    return (
        <div className={styles.introWrapper}>
            <Particles className={styles.particles}
    params={config} />
            <IntroInformation />
            <IntroSvg />
        </div>
    );
}