import React, { useState } from 'react';
import Form from './../Form/Form';
import List from './../List/List';

import './Main.css';

const Main = () => {
  const [incomesList, setIncomesList] = useState([]);

  const updateState = (id, type, change, dataObj) => {
    const data = incomesList;
    const element = dataObj;

    if (change === 'add') {
      element.id = id;
      element.value = parseFloat(element.value);
      data.push(element);
      console.log(data);
    }
    setIncomesList(data);
  };

  return (
    <div className='main-wrapper'>
      <Form onFormSubmit={updateState} />
      <List data={incomesList} />
    </div>
  );
};

export default Main;
