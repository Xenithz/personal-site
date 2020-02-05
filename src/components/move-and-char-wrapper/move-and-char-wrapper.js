import React from 'react';
import styles from './move-and-char-wrapper.module.css';
import { MoveAndCharList } from '../move-and-char-list/move-and-char-list';
import { motion } from 'framer-motion';


export const MoveAndCharWrapper = () => {
    return (
        <motion.div className={styles.moveAndCharWrapper} exit={{
            x: '100vw'
        }}>
            <MoveAndCharList />
        </motion.div>
    );
}