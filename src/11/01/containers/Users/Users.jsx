import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isError = useSelector((state) => state.users.isError);

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
        {users &&
          users.map((item) => {
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
