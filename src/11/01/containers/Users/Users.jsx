import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import { fetchUsers } from './../../actions/actions';

import { useSelector, useDispatch } from 'react-redux';

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isError = useSelector((state) => state.users.isError);

  const dispatch = useDispatch();

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
  const { root } = useStyles();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [users, dispatch]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${
          params.getValue('lastName') || ''
        }`,
    },
  ];

  const rows = users.map((item) => ({
    id: item.login.uuid,
    lastName: item.name.last,
    firstName: item.name.first,
    age: item.dob.age,
  }));

  return (
    <Box className={root}>
      <Typography component="h3" variant="h3">
        Users
      </Typography>

      <div style={{ height: 800, width: '100%' }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
      </div>
    </Box>
  );
};

export default Users;
