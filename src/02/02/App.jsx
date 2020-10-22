import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

const App = () => {
  const [uuid, setUuid] = useState(uuidv4());
  const handleClick = () => setUuid(uuidv4());

  return (
    <div className='App'>
      <h2>02/02</h2>
      <h3>UUID GENERATOR</h3>
      <span>{uuid}</span>
      <br />
      <button onClick={handleClick}>NEW UUID</button>
    </div>
  );
};

export default App;
