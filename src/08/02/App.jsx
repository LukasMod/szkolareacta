import React from 'react';

import Counter from './components/Counter';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2>08/02</h2>
      <Counter start={50} />
    </div>
  );
};

export default App;
