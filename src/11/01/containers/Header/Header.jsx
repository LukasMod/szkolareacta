import React from 'react';

import { Link } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  AppBar,
  makeStyles,
  Toolbar,
} from '@material-ui/core';

const Header = () => {
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: '#A3CB38',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      minWidth: '300px',
    },
    listItem: {
      textAlign: 'center',
    },
  }));

  const { header, logo, list, listItem } = useStyles();

  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />;
  }

  return (
    <Box component="header" color="primary.main">
      <AppBar position="static" className={header}>
        <Toolbar>
          <List
            component="nav"
            aria-label="main mailbox folders"
            className={list}>
            <Typography component="h1" variant="h4" className={logo}>
              11/01
            </Typography>
            <ListItemLink to="/" className={listItem}>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ variant: 'h6' }}
              />
            </ListItemLink>
            <ListItemLink to="/users" className={listItem}>
              <ListItemText
                primary="Users"
                primaryTypographyProps={{ variant: 'h6' }}
              />
            </ListItemLink>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
