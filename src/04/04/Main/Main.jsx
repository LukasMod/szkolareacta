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

  //check if localStorage is empty and then load examples data
  useEffect(() => {
    if (
      localStorage.getItem('incomes') === null ||
      localStorage.getItem('expenses') === null
    ) {
      localStorage.setItem('incomes', JSON.stringify(incomesExamples));
      localStorage.setItem('expenses', JSON.stringify(expensesExamples));
    }
    const localIncomeList = JSON.parse(localStorage.getItem('incomes'));
    const localExpensesList = JSON.parse(localStorage.getItem('expenses'));
    setIncomesList(localIncomeList);
    setExpensesList(localExpensesList);
  }, []);

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

  //updates amount of money on lists and localStorage data
  useEffect(() => {
    let total = 0;
    incomesList.forEach((item) => (total = total + item.value));
    setIncomesTotalAmount(total);
    localStorage.setItem('incomes', JSON.stringify(incomesList));
  }, [incomesList]);

  //updates amount of money on lists and localStorage data
  useEffect(() => {
    let total = 0;
    expensesList.forEach((item) => (total = total + item.value));
    setExpensesTotalAmount(total);
    localStorage.setItem('expenses', JSON.stringify(expensesList));
  }, [expensesList]);

  //updates amount of budget
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
