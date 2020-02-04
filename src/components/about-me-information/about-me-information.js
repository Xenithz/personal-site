import React from 'react';
import styles from './about-me-information.module.css';
import { motion } from 'framer-motion';
import { lefty } from '../motion-variants/left-content-variant';

export const AboutMeInformation = () => {
    return (
        <motion.div className={styles.box} initial="initial" animate="animate" transition={{delay: 1.25}} variants={lefty}>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar lectus purus, quis suscipit odio pellentesque eu. Curabitur vehicula ante ipsum, sed commodo libero efficitur vitae. Quisque commodo in felis et pharetra. In vel tempus ante. Donec sed neque cursus, vestibulum mauris et, tincidunt ipsum. Ut luctus sagittis arcu a euismod. Nam quis lacus quam. Nullam lorem risus, consequat vitae feugiat a, sollicitudin vel ante. Sed eget malesuada augue. Cras quis purus lacinia, ultricies enim id, maximus ipsum. Mauris nulla lorem, finibus sollicitudin eros vel, aliquet semper ligula. Duis vel maximus magna, nec vulputate urna. Vivamus faucibus interdum condimentum. </p>
        </motion.div>
    );
}