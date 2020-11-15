import React, { useEffect, useRef } from 'react';

import './Button.css';
const Button = React.forwardRef((props, ref) => {
  const { text, colorOver, colorOut, colorChangeOver, colorChangeOut } = props;

  //   const buttonRef = useRef();

  //   const buttonStyle = () => {
  //     buttonRef.current.style.backgroundColor = 'yellow';
  //   };

  //   useEffect(() => {
  //     buttonStyle();
  //   }, []);

  return (
    <button
      ref={ref}
      //   ref={buttonRef}
      onMouseOver={() => colorChangeOver(colorOver)}
      onMouseOut={() => colorChangeOut(colorOut)}>
      {text}
    </button>
  );
});

export default Button;
