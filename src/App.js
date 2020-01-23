import React from 'react';
import { IntroWrapper } from './components/intro-wrapper/intro-wrapper';
import { NavHeader } from './components/nav-header/nav-header';

export const App = () => {
  return (
    <div>
      <NavHeader />
      <IntroWrapper />
    </div>
  );
}
