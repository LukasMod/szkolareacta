import React from 'react';
import { Alert } from '@material-ui/core';

const Messages = ({ message, type = 'info' }) => {
  return <Alert severity={type}>{message}</Alert>;
};

export default Messages;

{
  /* <Alert severity="error">This is an error message!</Alert>
<Alert severity="warning">This is a warning message!</Alert>
<Alert severity="info">This is an information message!</Alert>
<Alert severity="success">This is a success message!</Alert> */
}
