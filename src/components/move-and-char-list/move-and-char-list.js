import React from 'react';
import styles from './move-and-char-list.module.css';
import { motion } from 'framer-motion';

export const MoveAndCharList = () => {
    //TODO: FILL THIS UP WITH STUFF
    return (
      <motion.div className={styles.listContainer} initial={{opacity: 0, x: '-100vh'}} animate={{opacity:1, x:'0vh'}} transition={{delay: 1.25}}  >
        <h1>Test</h1>
         <ul className={styles.charMoveList}>
             <li className={styles.listItem}>Lorem</li>
             <li className={styles.listItem}>Ipsum</li>
             <li className={styles.listItem}>Dolor</li>
             <li className={styles.listItem}>Lmfao</li>
         </ul> 
      </motion.div>  
    );
}