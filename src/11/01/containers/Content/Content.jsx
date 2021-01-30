import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './../Home/Home';
import Users from './../Users/Users';

const Content = () => {
  return (
    <main>
      <Switch>
        <Route component={Home} path="/" exact />

        <Route component={Users} path="/users" />

        <Redirect from="*" to="/" />
      </Switch>
    </main>
  );
};

export default Content;
