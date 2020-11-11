import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSend, setFormSend] = useState('');

  const onSubmit = (data, e) => {
    if (data.name && data.email && data.bio && data.gender && data.terms) {
      setFormSend(true);
      e.target.reset();
      window.alert('Form has been sent');
    }
  };

  const showError = (
    <div>
      <span className='error'>this field is required</span>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>FORM</span>
      <div className='name-wrapper'>
        <label>name:</label>
        <input
          type='text'
          name='name'
          ref={register({ required: true })}
          style={errors.name && { border: '1px solid red' }}
        />
      </div>
      {errors.name && showError}
      <div className='email-wrapper'>
        <label>email:</label>
        <input
          type='email'
          name='email'
          ref={register({ required: true })}
          style={errors.email && { border: '1px solid red' }}
        />
      </div>
      {errors.email && showError}
      <div className='bio-wrapper'>
        <label>bio:</label>
        <textarea
          name='bio'
          id='bio'
          ref={register({ required: true })}
          style={errors.bio && { border: '1px solid red' }}
          rows='10'></textarea>
      </div>
      {errors.bio && showError}

      <div
        className='gender-wrapper'
        style={errors.gender && { borderBottom: '1px solid red' }}>
        <label>Gender: </label>
        <label htmlFor='woman'>
          <input
            type='radio'
            name='gender'
            id='woman'
            value='woman'
            ref={register({ required: true })}
          />
          woman
        </label>
        <label htmlFor='man'>
          <input
            type='radio'
            name='gender'
            id='man'
            value='man'
            ref={register({ required: true })}
          />
          man
        </label>
      </div>
      {errors.gender && showError}
      <div
        className='terms-wrapper'
        style={errors.terms && { borderBottom: '1px solid red' }}>
        <label className='terms' htmlFor='terms'>
          <input
            type='checkbox'
            id='terms'
            name='terms'
            ref={register({ required: true })}
          />
          accept terms
        </label>
      </div>
      {errors.terms && showError}
      <input type='submit' className='button' />
      {formSend && <span>form has been sent</span>}
    </form>
  );
};

export default Form;
