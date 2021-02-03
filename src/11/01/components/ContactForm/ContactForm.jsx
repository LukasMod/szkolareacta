import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postAndFetchContact } from './../../actions/actions';

import {
  Container,
  Box,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';

const ContactForm = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    buttonsWrapper: {
      paddingTop: '20px',
    },
    button: {
      margin: '0 2em',
    },
  }));
  const { button, buttonsWrapper, root } = useStyles();

  const dispatch = useDispatch();
  const postContact = (...args) => dispatch(postAndFetchContact(...args));
  const onSubmit = (data, e) => console.log(data, e);
  const handleSubmitClick = () => {
    // postContact(handleSubmit());
    console.log(handleSubmit(onSubmit));
  };
  return (
    // <form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="First name"
        ref={register({ required: true, maxLength: 20 })}
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        name="Mobile number"
        ref={register({ required: true, minLength: 6, maxLength: 12 })}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
      {/* <Controller
        as={
          <Box className={buttonsWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={button}
              onClick={() => handleSubmitClick()}>
              Submit
            </Button>
          </Box>
        }
        control={control}
        name="button"
      /> */}
    </form>
  );
};

export default ContactForm;
