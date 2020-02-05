import React from 'react';
import { IntroWrapper } from './components/intro-wrapper/intro-wrapper';
import { AboutMeWrapper } from './components/about-me-wrapper/about-me-wrapper';
import { MoveAndCharWrapper } from './components/move-and-char-wrapper/move-and-char-wrapper';
import { NavHeader } from './components/nav-header/nav-header';
import { Switch, Route, useLocation } from 'react-router-dom';
import particles from './particles.png';
import styles from './App.module.css';
import { AnimatePresence } from 'framer-motion';

export const App = () => {
  const location = useLocation();

  return (
    <div>
      <NavHeader />
        <img src={particles} alt="swag" className={styles.particles}></img>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={IntroWrapper} />
            <Route exact path="/aboutme" component={AboutMeWrapper} />
            <Route exact path="/moveandchar" component={MoveAndCharWrapper} />
          </Switch>
        </AnimatePresence>
    </div>
  );
}
