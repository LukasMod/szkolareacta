import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './User.css';

const User = ({ user }) => {
  const event = new Date(user.registered.date);

  const useStyles = makeStyles(() => ({
    root: {
      margin: '0 auto',
      display: 'flex',
      maxWidth: '400px',
      marginBottom: '1em',
      border: '2px solid white',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      minWidth: '250px',
    },
    cover: {
      width: 151,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      {user && (
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {user.name.first} {user.name.last}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.location.city}, {user.location.country}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Registered: {event.toLocaleDateString()}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={user.picture.large}
            title={`${user.name.first} ${user.name.last}`}
          />
        </Card>
      )}
    </div>
  );
};

export default User;
