import React from 'react';
import { Button, Input, Textarea } from '03/01_03/components/Form';
import { faBolt, faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h2>03/01</h2>
      <form>
        <Input
          bgColor='bright yarrow'
          borderSize='1'
          borderRadius='10'
          borderColor='american river'
          color='american river'
        />
        <Textarea
          bgColor='bright yarrow'
          borderSize='1'
          borderRadius='10'
          borderColor='american river'
          color='american river'
        />
        <Button bgColor='mint leaf' color='city lights' icon={faUser}>
          option using children
        </Button>
        <Button label='empty props, text in label prop' icon={faBolt} />
      </form>
    </div>
  );
};

export default App;
