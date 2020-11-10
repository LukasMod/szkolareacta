import React from 'react';

import './App.css';
import CalcFunc from './Functional/CalcFunc';
import CalcClass from './Class/CalcClass';

const App = () => {
  return (
    <div className='App'>
      <h2>04/01</h2>
      <CalcFunc />
      <CalcClass />
    </div>
  );
};

export default App;
