import React from 'react';
import './intro-wrapper.css'
import { IntroSvg } from '../intro-svg/intro-svg';
import { IntroInformation } from '../intro-information/intro-information';

export const IntroWrapper = () => {
    return (
        <div className="intro-wrapper">
            <IntroInformation />
            <IntroSvg />
        </div>
    );
}