import React, { useRef, useState } from 'react';
import useInput from './helpers';

const Form = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const textareaBio = useRef();
  const radioGender = useRef();
  const checkboxTermsWrapper = useRef();

  const [name, handleChangeName] = useInput();
  const [email, handleChangeEmail] = useInput();
  const [bio, handleChangeBio] = useInput();
  const [gender, handleChangeGender] = useInput();
  const [terms, handleChangeTerms] = useInput();

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [bioError, setBioError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [formSend, setFormSend] = useState('');

  const validateInput = (value, inputValue, setValueError) => {
    if (value.length !== 0) {
      setValueError(false);
      return (inputValue.current.style.border = '1px solid black');
    } else {
      setValueError(true);
      return (inputValue.current.style.border = '1px solid red');
    }
  };
  const validateWrapper = (value, inputValue, setValueError) => {
    if (value) {
      setValueError(false);
      return (inputValue.current.style.border = 'none');
    } else {
      setValueError(true);
      return (inputValue.current.style.border = '1px solid red');
    }
  };
  const validateForm = () => {
    validateInput(name, inputName, setNameError);
    validateInput(email, inputEmail, setEmailError);
    validateInput(bio, textareaBio, setBioError);
    validateWrapper(gender, radioGender, setGenderError);
    validateWrapper(terms, checkboxTermsWrapper, setTermsError);
  };
  const showError = (
    <div>
      <span className='error'>this field is required</span>
    </div>
  );

  const isFormValid = () => name && email && bio && gender && terms;

  const clearForm = () => {
    handleChangeName('');
    handleChangeEmail('');
    handleChangeBio('');
    handleChangeGender('');
    handleChangeTerms('');
    inputName.current.value = '';
    inputEmail.current.value = '';
    textareaBio.current.value = '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();

    if (formSend === true) {
      setFormSend(false);
    }
    if (isFormValid()) {
      clearForm();
      setFormSend(true);
      window.alert('Form has been sent');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>FORM</span>
      <div className='name-wrapper'>
        <label>name:</label>
        <input type='text' ref={inputName} onChange={handleChangeName} />
      </div>
      {nameError && showError}
      <div className='email-wrapper'>
        <label>email:</label>
        <input type='email' ref={inputEmail} onChange={handleChangeEmail} />
      </div>
      {emailError && showError}
      <div className='bio-wrapper'>
        <label>bio:</label>
        <textarea
          name='bio'
          id='bio'
          ref={textareaBio}
          onChange={handleChangeBio}
          rows='10'></textarea>
      </div>
      {bioError && showError}
      <div className='gender-wrapper' ref={radioGender}>
        <label>Gender: </label>
        <label htmlFor='woman'>
          <input
            type='radio'
            name='gender'
            id='woman'
            value='woman'
            checked={gender === 'woman'}
            onChange={handleChangeGender}
          />
          woman
        </label>
        <label htmlFor='man'>
          <input
            type='radio'
            name='gender'
            id='man'
            value='man'
            checked={gender === 'man'}
            onChange={handleChangeGender}
          />
          man
        </label>
      </div>
      {genderError && showError}
      <div className='terms-wrapper' ref={checkboxTermsWrapper}>
        <label className='terms' htmlFor='terms'>
          <input
            type='checkbox'
            id='terms'
            name='terms'
            checked={terms}
            onChange={handleChangeTerms}
          />
          accept terms
        </label>
      </div>
      {termsError && showError}
      <button type='submit'>submit</button>
      {formSend && <span>form has been sent</span>}
    </form>
  );
};

export default Form;
