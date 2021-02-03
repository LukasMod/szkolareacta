import React from 'react';
import ContactForm from './../../components/ContactForm/ContactForm';
import Notifier from './../../components/Notifier/Notifier';

import { Container, makeStyles, Typography } from '@material-ui/core';

const Form = () => {
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
  const { root } = useStyles();

  return (
    <Container maxWidth="md" className={root}>
      <Notifier />
      <Typography component="h3" variant="h3">
        Contact
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default Form;
