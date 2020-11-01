import React from 'react';
import { colorsPalette } from '../../UI/ColorsPalette';

const Textarea = ({
  bgColor,
  borderSize,
  borderRadius,
  borderColor,
  color,
}) => {
  const borderColorFromPalette =
    colorsPalette[borderColor] || colorsPalette['defaultBg'];

  const style = {
    backgroundColor: colorsPalette[bgColor] || colorsPalette['defaultBg'],
    color: colorsPalette[color] || colorsPalette['defaultColor'],
    border: `${borderSize}px solid ${borderColorFromPalette}`,
    borderRadius: `${borderRadius}px`,
    padding: '0.5em',
    width: '100%',
  };

  return <textarea style={style}></textarea>;
};

export default Textarea;
