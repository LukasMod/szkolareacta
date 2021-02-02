export const REQUEST = 'users/REQUEST';
export const ERROR = 'users/ERROR';
export const LOAD = 'users/LOAD';
export const RESET = 'users/RESET';
export const ADD = 'users/ADD';

export const ENQUEUE_SNACKBAR = 'messages/ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'messages/CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'messages/REMOVE_SNACKBAR';

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

export const enqueueSnackbar = (notification) => {
  const key = notification.options && notification.options.key;

  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

export const closeSnackbar = (key) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});
