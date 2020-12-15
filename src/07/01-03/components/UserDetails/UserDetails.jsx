import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
  if (!user) {
    return <Redirect to="/users" />;
  }
  const position = [
    Number(user.location.coordinates.latitude),
    Number(user.location.coordinates.longitude),
  ];

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
          <b>Name:</b> {user.name.first}
        </Typography>
        <Typography variant="body1" align="left">
          <b>Surname:</b> {user.name.last}
        </Typography>
        <Typography variant="body1" align="left">
          <b>Email:</b> {user.email}
        </Typography>
        <Typography variant="body1" align="left">
          <b>Phone:</b> {user.phone}
        </Typography>
        <Typography variant="body1" align="left">
          <b>Country:</b> {user.location.country}
        </Typography>
        <Typography variant="body1" align="left">
          <b>State:</b> {user.location.state}
        </Typography>
        <Typography variant="body1" align="left">
          <b>City:</b> {user.location.city}
        </Typography>
        <Typography variant="body1" align="left">
          <b>Street:</b> {user.location.street.name},{' '}
          {user.location.street.number}
        </Typography>
      </CardContent>
      <MapContainer
        style={{ width: 410, height: 205 }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {user.name.first} {user.name.last}
          </Popup>
        </Marker>
      </MapContainer>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={'/users'}>
          Back to List
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserDetails;
