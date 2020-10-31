import React from 'react';
import { colorsPalette } from './ColorsPalette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  bgColor = 'black',
  children,
  color = 'red',
  label,
  icon,
}) => {
  const style = {
    backgroundColor:
      colorsPalette[bgColor.replace(/\s/g, '_').toLocaleLowerCase()],
    color: colorsPalette[color.replace(/\s/g, '_').toLocaleLowerCase()],
    padding: '0.5em',
    fontSize: '1.25rem',
  };

  return (
    <button style={style}>
      {icon && <FontAwesomeIcon icon={icon} />} {children || label}
    </button>
  );
};

export default Button;
