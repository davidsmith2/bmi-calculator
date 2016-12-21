import React from 'react';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import './App.css';

const App = (props) => {
  return (
    <div>
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
};

export default App;