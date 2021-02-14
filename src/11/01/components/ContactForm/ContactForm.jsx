import React, { useCallback, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from './../../actions/messagesActions';
import {
  postAndFetchContact,
  errorContact,
} from './../../actions/contactActions';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';

const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
    control,
    errors: fieldsErrors,
  } = useForm();

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    buttonsWrapper: {
      paddingTop: '20px',
    },
    button: {
      margin: '0 2em',
    },
    inputsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
    },
    input: {
      marginBottom: '.5em',
    },
  }));
  const { root, inputsWrapper, button, buttonsWrapper, input } = useStyles();

  const dispatch = useDispatch();
  const postContact = (...args) => dispatch(postAndFetchContact(...args));
  const enqueueSnackbar = useCallback(
    (...args) => dispatch(enqueueSnackbarAction(...args)),
    [dispatch]
  );
  const closeSnackbar = useCallback(
    (...args) => dispatch(closeSnackbarAction(...args)),
    [dispatch]
  );

  const onSubmit = (data) => {
    postContact(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful === true) {
      enqueueSnackbar({
        message: 'Contact added.',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: (key) => (
            <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
          ),
        },
      });
      reset({
        username: '',
        email: '',
        phone: '',
      });
    } else if (
      isSubmitSuccessful === false &&
      (fieldsErrors.username || fieldsErrors.email || fieldsErrors.phone)
    ) {
      dispatch(errorContact());
      enqueueSnackbar({
        message: 'Correct form.',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: (key) => (
            <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
          ),
        },
      });
    } else {
      return;
    }
  }, [
    isSubmitSuccessful,
    fieldsErrors,
    reset,
    closeSnackbar,
    enqueueSnackbar,
    dispatch,
  ]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={root} noValidate>
      <Box className={inputsWrapper}>
        <Controller
          name="username"
          as={
            <TextField
              required
              label="Username"
              id="standard-basic"
              className={input}
              helperText={
                fieldsErrors.username ? fieldsErrors.username.message : null
              }
              error={Boolean(fieldsErrors.username)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/i,
              message:
                'The username must start with a letter and must be between 1 and 20 characters long',
            },
          }}
        />
        <Controller
          name="email"
          as={
            <TextField
              required
              label="Email"
              className={input}
              helperText={
                fieldsErrors.email ? fieldsErrors.email.message : null
              }
              error={Boolean(fieldsErrors.email)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address.',
            },
          }}
        />
        <Controller
          name="phone"
          as={
            <TextField
              required
              label="Phone"
              className={input}
              helperText={
                fieldsErrors.phone ? fieldsErrors.phone.message : null
              }
              error={Boolean(fieldsErrors.phone)}
            />
          }
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]{9,14}$/i,
              message:
                'Invalid phone number, must be between 9 and 14 characters long.',
            },
          }}
        />
      </Box>
      <Box className={buttonsWrapper}>
        <Button
          variant="contained"
          color="primary"
          className={button}
          type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
