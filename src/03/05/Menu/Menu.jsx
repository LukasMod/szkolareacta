import React from 'react';

const Menu = ({ children }) => {
  const style = {
    minWidth: '100px',
    height: '100vh',
    position: 'fixed',
    background: '#eee',
    top: 0,
    left: 0,
    ul: { listStyle: 'none', textAlign: 'center' },
  };

  return (
    <nav style={style}>
      <ul style={style.ul}>{children}</ul>
    </nav>
  );
};

export default Menu;
