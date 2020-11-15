import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import typesExamples from './../data/typesExamples.json';
import './Form.css';

const Form = ({ onFormSubmit, walletTotalAmount }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [categories, setCategories] = useState([]);

  const changeCategory = (e) => {
    setCategories(typesExamples[e.target.value]);
  };

  const onSubmit = (data, e) => {
    const id = uuidv4();
    onFormSubmit(id, data.type, 'add', data);
    e.target.reset();
  };

  const categoriesList = categories.map((item) => {
    return (
      <option key={`type-${item}`} value={item}>
        {item}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>e-wallet</h2>
      <h3 style={walletTotalAmount < 0 ? { color: 'red' } : { color: 'green' }}>
        {walletTotalAmount} $
      </h3>
      <div className='radio-wrapper'>
        <div className='income-wrapper'>
          <input
            type='radio'
            name='type'
            value='incomes'
            id='income'
            ref={register({ required: true })}
            onChange={changeCategory}
          />
          <label htmlFor='income'>income</label>
        </div>
        <div className='expenses-wrapper'>
          <input
            type='radio'
            name='type'
            value='expenses'
            id='expenses'
            ref={register({ required: true })}
            onChange={changeCategory}
          />
          <label htmlFor='expenses'>expenses</label>
        </div>
      </div>

      <input
        type='text'
        name='text'
        placeholder='text'
        ref={register({ required: true })}
        style={errors.value && { background: '#fab1a0' }}
      />
      <input
        type='number'
        name='value'
        placeholder='$$$'
        ref={register({ required: true, min: 0 })}
        style={errors.value && { background: '#fab1a0' }}
      />
      <select
        name='category'
        placeholder='category'
        ref={register({ required: true })}>
        <option value='' disabled></option>
        {categoriesList}
      </select>
      <div className='button-wrapper'>
        <input type='submit' value='add' className='button-form' />
        <input
          type='button'
          value='clear'
          className='button-form'
          onClick={() => {
            reset({
              errors: false,
              dirtyFields: false,
              dirty: false,
              isSubmitted: false,
              touched: false,
              isValid: false,
              submitCount: false,
            });
          }}
        />
      </div>
    </form>
  );
};

export default Form;
