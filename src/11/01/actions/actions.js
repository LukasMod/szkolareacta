export const REQUEST_USERS = 'users/REQUEST';
export const ERROR_USERS = 'users/ERROR';
export const LOAD_USERS = 'users/LOAD';
export const RESET_USERS = 'users/RESET';
export const ADD_USER = 'users/ADD';

export const ENQUEUE_SNACKBAR = 'messages/ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'messages/CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'messages/REMOVE_SNACKBAR';

export const POST_CONTACT = 'contact/POST_CONTACT';
export const ADD_CONTACT = 'contact/ADD_CONTACT';
export const ERROR_CONTACT = 'contact/ERROR_CONTACT';

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

export const postAndFetchContact = (data) => {
  return function (dispatch) {
    dispatch(addContact());
    fetch('/contact', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        phone: data.phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(postContact(data.results)))
      .catch((error) => dispatch(errorContact()));
  };
};

export const requestUsers = () => ({
  type: REQUEST_USERS,
});

export const errorUsers = () => ({
  type: ERROR_USERS,
});

export const loadUsers = (data) => ({
  type: LOAD_USERS,
  payload: data,
});

export const resetUsers = () => ({
  type: RESET_USERS,
});

export const addUsers = (data) => ({
  type: ADD_USER,
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

export const postContact = (data) => ({
  type: POST_CONTACT,
  payload: data,
});

export const addContact = () => ({
  type: ADD_CONTACT,
});

export const errorContact = () => ({
  type: ERROR_CONTACT,
});
