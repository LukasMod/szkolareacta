import React from 'react';
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

  return (
    <Container maxWidth="md" className={root}>
      <Typography component="h3" variant="h3">
        Home
      </Typography>
      <Box className={buttonsWrapper}>
        <Button variant="contained" color="primary" className={button}>
          Load
        </Button>
        <Button variant="contained" color="primary" className={button}>
          Reset
        </Button>
        <Button variant="contained" color="primary" className={button}>
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
