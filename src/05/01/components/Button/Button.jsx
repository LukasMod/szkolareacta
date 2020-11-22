import React from 'react';

import './Button.scss';

const Button = ({ handleClick, children, solo }) => {
  return (
    <button
      className={`button ${solo && 'button--solo'}`}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
