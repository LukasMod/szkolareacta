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
  const useStyles = makeStyles((theme) => ({
    header: {
      backgroundColor: '#A3CB38',
    },
    toolbar: {
      display: 'flex',
      [theme.breakpoints.down(425)]: {
        flexDirection: 'column',
      },
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down(425)]: {
        flexDirection: 'column',
      },
    },
    listItem: {
      textAlign: 'center',
    },
  }));

  const { header, list, listItem, toolbar } = useStyles();

  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />;
  }

  return (
    <Box component="header" color="primary.main">
      <AppBar position="static" className={header}>
        <Toolbar className={toolbar}>
          <Typography component="h1" variant="h4">
            11/01
          </Typography>
          <List component="nav" className={list}>
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
            <ListItemLink to="/form" className={listItem}>
              <ListItemText
                primary="Contact"
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
