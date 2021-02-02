export const REQUEST = 'users/REQUEST';
export const ERROR = 'users/ERROR';
export const LOAD = 'users/LOAD';
export const RESET = 'users/RESET';
export const ADD = 'users/ADD';

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(requestUsers());
    fetch('/users')
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          dispatch(loadUsers(data.results));
        }, 2000)
      )
      .catch((error) => dispatch(errorUsers()));
  };
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(requestUsers());
    fetch('/user')
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
