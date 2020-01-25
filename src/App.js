import React from 'react';
import { IntroWrapper } from './components/intro-wrapper/intro-wrapper';
import { AboutMe } from './components/about-me/about-me';
import { MoveAndChar } from './components/move-and-char/move-and-char';
import { NavHeader } from './components/nav-header/nav-header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import particles from './particles.png';
import styles from './App.module.css';

export const App = () => {
  return (
    <Router>
      <div>
        <NavHeader />
        <img src={particles} alt="swag" className={styles.particles}></img>
        <Switch>
          <Route exact path="/" component={IntroWrapper} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/moveandchar" component={MoveAndChar} />
        </Switch>
      </div>
    </Router>
  );
}
