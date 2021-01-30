import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h2>11/01</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
