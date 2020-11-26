import React from 'react';

// import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import { UsersContainer } from './components';

const App = () => {
  return (
    <div className="app">
      <h2>05/04-05</h2>
      <UsersContainer></UsersContainer>
    </div>
  );
};

export default App;
