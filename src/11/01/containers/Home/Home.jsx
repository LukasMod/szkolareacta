import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notifier from './../../components/Notifier/Notifier';
import {
  fetchUsers,
  fetchUser,
  resetUsers,
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from './../../actions/actions';
import {
  Container,
  Box,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';

import ContactTable from './../../components/ContactTable/ContactTable';

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    buttonsWrapper: {
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      [theme.breakpoints.down(425)]: {
        minWidth: '100%',
        flexDirection: 'column',
      },
    },
    button: {
      margin: '0.5em 2em',
      [theme.breakpoints.down(425)]: {
        width: '150px',
      },
    },
    tableWrapper: {
      padding: '20px 0',
    },
  }));
  const { button, buttonsWrapper, root, tableWrapper } = useStyles();

  const contacts = useSelector((state) => state.contact.contacts);

  const dispatch = useDispatch();
  const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
  const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

  const handleClickLoad = () => {
    enqueueSnackbar({
      message: 'Data loaded.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'success',
        action: (key) => (
          <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
        ),
      },
    });
    return dispatch(fetchUsers());
  };

  const handleClickReset = () => {
    enqueueSnackbar({
      message: 'Users reset.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'info',
        action: (key) => (
          <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
        ),
      },
    });
    return dispatch(resetUsers());
  };

  const handleClickAdd = () => {
    enqueueSnackbar({
      message: 'One user added.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'success',
        action: (key) => (
          <Button onClick={() => closeSnackbar(key)}>dismiss me</Button>
        ),
      },
    });
    return dispatch(fetchUser());
  };

  return (
    <Container maxWidth="md" className={root}>
      <Notifier />
      <Typography component="h3" variant="h3">
        Home
      </Typography>
      <Box className={buttonsWrapper}>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => handleClickLoad()}>
          Load
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => handleClickReset()}>
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => handleClickAdd()}>
          Add
        </Button>
      </Box>
      <Typography component="h4" variant="h4">
        Table with data from Contact Form
      </Typography>
      <Box className={tableWrapper}>
        <ContactTable data={contacts} />
      </Box>
    </Container>
  );
};

export default Home;
