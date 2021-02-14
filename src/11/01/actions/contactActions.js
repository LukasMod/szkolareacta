import { POST_CONTACT, ADD_CONTACT, ERROR_CONTACT } from './consts';

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
