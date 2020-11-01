import React from 'react';

const MenuLink = ({ children, to, isActive }) => {
  const style = {
    color: isActive ? 'red' : 'blue',
    marginTop: '5px',
    a: {
      textDecoration: 'none',
      display: 'block',
      width: '100%',
      height: '100%',
    },
  };

  return (
    <li style={style}>
      <a style={style.a} href={to}>
        {children}
      </a>
    </li>
  );
};

export default MenuLink;
