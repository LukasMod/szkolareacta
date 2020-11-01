import React from 'react';
import { Menu, MenuLink } from '03/05/Menu/index';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Menu>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about' isActive>
          About
        </MenuLink>
        <MenuLink to='/contact'>Contact</MenuLink>
        <MenuLink to='/posts'>Posts</MenuLink>
      </Menu>
      <h2>03/05</h2>
    </div>
  );
};

export default App;
