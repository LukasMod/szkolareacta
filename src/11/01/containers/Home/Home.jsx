import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, fetchUser, resetUsers } from './../../actions/actions';
import {
  Container,
  Box,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';

const Home = () => {
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

  return (
    <Container maxWidth="md" className={root}>
      <Typography component="h3" variant="h3">
        Home
      </Typography>
      <Box className={buttonsWrapper}>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => dispatch(fetchUsers())}>
          Load
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => dispatch(resetUsers())}>
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={() => dispatch(fetchUser())}>
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
