import React from 'react';
import Button from './Button/Button';

import './App.css';

const App = () => {
  const ref = React.createRef();

  const colorChange = (color) => {
    ref.current.style.backgroundColor = `${color}`;
  };

  return (
    <div className='App'>
      <h1>04/05</h1>
      <Button
        text='Button'
        colorOver='yellow'
        colorOut='blue'
        ref={ref}
        colorChangeOver={colorChange}
        colorChangeOut={colorChange}
      />
    </div>
  );
};

export default App;
