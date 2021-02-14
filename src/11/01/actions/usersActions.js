import {
  REQUEST_USERS,
  REQUEST_USER,
  ERROR_USERS,
  LOAD_USERS,
  RESET_USERS,
  ADD_USER,
} from './consts';

export const requestUsers = () => ({
  type: REQUEST_USERS,
});

export const requestUser = () => ({
  type: REQUEST_USER,
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

export const addUser = (data) => ({
  type: ADD_USER,
  payload: data,
});

// WITHOUT SAGAS
// export const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(requestUsers());
//     fetch('/users')
//       .then((response) => response.json())
//       .then((data) =>
//         setTimeout(() => {
//           dispatch(loadUsers(data.results));
//         }, 1000)
//       )
//       .catch((error) => dispatch(errorUsers()));
//   };
// };

// export const fetchUser = () => {
//   return function (dispatch) {
//     // dispatch(requestUsers());
//     fetch('/user')
//       .then((response) => response.json())
//       .then((data) => dispatch(addUsers(data.results)))
//       .catch((error) => dispatch(errorUsers()));
//   };
// };
