import React from 'react';
import Employees from '03/06/Employees/Employees';
import data from '03/06/data/Employees.json';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h2>03/06</h2>
      <Employees data={data} />
    </div>
  );
};

export default App;
