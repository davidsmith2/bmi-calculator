import React from 'react';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import './App.css';

const App = () => {
  return (
    <div>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
};

export default App;