import React from 'react';
import { colorsPalette } from '../../UI/ColorsPalette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ bgColor, children, color, label, icon }) => {
  const style = {
    backgroundColor: colorsPalette[bgColor] || colorsPalette['defaultBg'],
    color: colorsPalette[color] || colorsPalette['defaultColor'],
    padding: '0.5em',
  };

  return (
    <button style={style}>
      {icon && <FontAwesomeIcon icon={icon} />} {children || label}
    </button>
  );
};

export default Button;
