import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //   Redirect,
} from 'react-router-dom';

import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetails/UserDetails';

import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const getUserFromUserList = (userFromUserList) => {
    setUser(userFromUserList);
    // console.log(userFromUserList);
    // console.log(user);
  };

  return (
    <Router>
      <div className="App">
        <h2>07/01-03</h2>
        <Switch>
          <Route exact path="/users/:userId">
            <UserDetails user={user} />
          </Route>
          {/* <Route path="/users">
            <UserList />
          </Route> */}
          {/* <Redirect to="/users" /> */}
          <UserList getUser={getUserFromUserList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
