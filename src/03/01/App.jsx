import React from 'react';
import Button from './Button';
import { faBolt, faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h2>03/01</h2>
      <Button bgColor='mint leaf' color='light greenish blue' icon={faUser}>
        option using children
      </Button>
      <br />
      <Button
        label='Using label. When there is no defined color in Button component color palette (undefined)'
        bgColor='wrong color X'
        color='wrong color Y'
      />
      <br />
      <Button label='when bgColor and color props are empty' icon={faBolt} />
    </div>
  );
};

export default App;
