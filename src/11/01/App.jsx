import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './containers/Header/Header';
import Content from './containers/Content/Content';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
};

export default App;
