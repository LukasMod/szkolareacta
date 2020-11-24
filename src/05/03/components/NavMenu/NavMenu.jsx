import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './NavMenu.scss';

const NavMenu = ({ handleClick, isOpen }) => {
  const isActive = {
    textDecoration: 'underline',
  };

  return (
    <nav className={`navMenu navMenu--${isOpen ? 'open' : 'hide'}`}>
      <ul className="navMenu__list">
        <li className="navMenu__item">
          <NavLink to="/home" activeStyle={isActive}>
            Home
          </NavLink>
        </li>
        <li className="navMenu__item">
          <NavLink to="/about" activeStyle={isActive}>
            About
          </NavLink>
        </li>
        <li className="navMenu__item">
          <NavLink to="/contact" activeStyle={isActive}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navMenu__button" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </nav>
  );
};

export default NavMenu;
