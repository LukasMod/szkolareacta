import React, { useState } from 'react';
import Form from './../Form/Form';
import List from './../List/List';

import incomesExamples from './../data/incomesExamples.json';
import expensesExamples from './../data/expensesExamples.json';

import './Main.css';

const Main = () => {
  const [incomesList, setIncomesList] = useState(incomesExamples);
  const [expensesList, setExpensesList] = useState(expensesExamples);
  const [incomesTotalAmount, setIncomesTotalAmount] = useState(0);
  const [expensesTotalAmount, setExpensesTotalAmount] = useState(0);

  const pushOrDelete = (id, change, elementAdded, dataList) => {
    if (change === 'add') {
      elementAdded.id = id;
      elementAdded.value = parseFloat(elementAdded.value);
      dataList.push(elementAdded);
    } else if (change === 'delete') {
      const dataAfterRemove = dataList.filter((item) => item.id !== id);
      dataList = dataAfterRemove;
    }
    return dataList;
  };

  const updateState = (id, type, change, dataObj) => {
    if (type === 'incomes') {
      let data = incomesList;
      const elementAdded = dataObj;
      setIncomesList([...pushOrDelete(id, change, elementAdded, data)]);
    } else {
      let data = expensesList;
      const elementAdded = dataObj;
      setExpensesList([...pushOrDelete(id, change, elementAdded, data)]);
    }
  };

  return (
    <div className='main-wrapper'>
      <Form onFormSubmit={updateState} />
      <List
        data={incomesList}
        defaultType='incomes'
        totalAmount={incomesTotalAmount}
        onDelete={updateState}
      />
      <List
        data={expensesList}
        defaultType='expenses'
        totalAmount={expensesTotalAmount}
        onDelete={updateState}
      />
    </div>
  );
};

export default Main;
