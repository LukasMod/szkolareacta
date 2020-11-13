import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import './Form.css';

const Form = ({ onFormSubmit }) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    const id = uuidv4();
    onFormSubmit(id, data.type, 'add', data);
    e.target.reset();
  };

  // const createId = () => {
  //   return Math.floor(Math.random() * 10000);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>e-wallet</h2>
      <h3>TOTAL</h3>
      <div className='radio-wrapper'>
        <div className='income-wrapper'>
          <input
            type='radio'
            name='type'
            value='incomes'
            id='income'
            ref={register({ required: true })}
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
        {/* <option hidden disabled selected value>
            category
          </option> */}
        <option value='food'>food</option>
        <option value='fun'>fun</option>
        <option value='study'>study</option>
        <option value='others'>others</option>
      </select>
      <div className='button-wrapper'>
        <input type='submit' value='add' className='button-form' />
        <input
          type='button'
          value='clear'
          className='button-form'
          onClick={() => {
            reset({
              errors: false, // errors will not be reset
              dirtyFields: false, // dirtyFields will not be reset
              dirty: false, // dirty will not be reset
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
