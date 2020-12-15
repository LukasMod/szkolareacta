import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto',
  },
  image: {
    height: 200,
    width: 'auto',
    padding: '2em',
    margin: 'auto',
  },
});

const UserDetails = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        component="img"
        image={user.picture.large}
        title={`${user.name.first} ${user.name.last}`}
      />
      <CardContent>
        <Typography variant="body1" align="left">
          Name: {user.name.first}
        </Typography>
        <Typography variant="body1" align="left">
          Surname: {user.name.last}
        </Typography>
        <Typography variant="body1" align="left">
          Email: {user.email}
        </Typography>
        <Typography variant="body1" align="left">
          Phone: {user.phone}
        </Typography>
        <Typography variant="body1" align="left">
          Country: {user.location.country}
        </Typography>
        <Typography variant="body1" align="left">
          State: {user.location.state}
        </Typography>
        <Typography variant="body1" align="left">
          City: {user.location.city}
        </Typography>
        <Typography variant="body1" align="left">
          Street: {user.location.street.name}, {user.location.street.number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Back to List
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserDetails;
