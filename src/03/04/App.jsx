import React from 'react';
import Card from '03/04/Card/Card';
import Image from '03/04/Card/spanish-paella-4459519_640.jpg';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h2>03/04</h2>
      <br />
      <Card image={Image} />
    </div>
  );
};

export default App;
