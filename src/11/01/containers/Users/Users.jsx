import React, { useState, useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';

const USERS_NUMBER = 10;

const Users = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch(`https://randomuser.me/api/?results=${USERS_NUMBER}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    listItemText: {
      textAlign: 'center',
    },
  }));
  const { root, listItemText } = useStyles();

  return (
    <Box className={root}>
      <Typography component="h3" variant="h3">
        Users
      </Typography>

      <List component="nav" aria-label="main mailbox folders">
        {users.map((item) => {
          return (
            <ListItem key={item.login.uuid}>
              <ListItemText
                primary={item.name.first}
                className={listItemText}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Users;
