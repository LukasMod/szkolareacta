import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import { Content, Button, NavMenu, Header } from './components';
import { Home, About, Contact } from './pages';

const App = () => {
  const [navActive, setNavActive] = useState(false);

  const handleOpenNav = () => {
    setNavActive((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="app">
        <Header>
          <Button handleClick={handleOpenNav}>Menu</Button>
        </Header>
        <div className="app__nav-menu-container">
          <NavMenu handleClick={handleOpenNav} isOpen={navActive} />
          <Content>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Content>
        </div>
      </div>
    </Router>
  );
};

export default App;
