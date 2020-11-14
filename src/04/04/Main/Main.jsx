import React, { useState, useEffect } from 'react';
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
  const [walletTotalAmount, setWalletTotalAmount] = useState(0);

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

  useEffect(() => {
    let total = 0;
    incomesList.forEach((item) => (total = total + item.value));
    setIncomesTotalAmount(total);
  }, [incomesList]);

  useEffect(() => {
    let total = 0;
    expensesList.forEach((item) => (total = total + item.value));
    setExpensesTotalAmount(total);
  }, [expensesList]);

  useEffect(() => {
    setWalletTotalAmount(incomesTotalAmount - expensesTotalAmount);
  }, [incomesTotalAmount, expensesTotalAmount]);

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
      <Form onFormSubmit={updateState} walletTotalAmount={walletTotalAmount} />
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
