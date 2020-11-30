import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

import { UsersContainer } from './components';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h2>05/04-05</h2>
        <Switch>
          <Route path="/users" component={UsersContainer} />
          <Redirect to="/users" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
