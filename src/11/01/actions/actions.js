export const REQUEST = 'users/REQUEST';
export const ERROR = 'users/ERROR';
export const LOAD = 'users/LOAD';
export const RESET = 'users/RESET';
export const ADD = 'users/ADD';

export const fetchUsers = (USERS_NUMBER = 10) => {
  return function (dispatch) {
    dispatch(requestUsers());
    fetch(`https://randomuser.me/api/?results=${USERS_NUMBER}`)
      .then((response) => response.json())
      .then((data) => dispatch(loadUsers(data.results)))
      .catch((error) => dispatch(errorUsers()));
  };
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(requestUsers());
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => dispatch(addUsers(data.results)))
      .catch((error) => dispatch(errorUsers()));
  };
};

export const requestUsers = () => ({
  type: REQUEST,
});

export const errorUsers = () => ({
  type: ERROR,
});

export const loadUsers = (data) => ({
  type: LOAD,
  payload: data,
});

export const resetUsers = () => ({
  type: RESET,
});

export const addUsers = (data) => ({
  type: ADD,
  payload: data,
});
