import { ADD_CONTACT, POST_CONTACT, ERROR_CONTACT } from './../actions/actions';

const INITIAL_STATE = {
  contacts: [],
  isError: false,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, isError: false };
    case POST_CONTACT:
      return {
        ...state,
        contacts: state.contacts.concat(action.payload),
        isError: false,
      };
    case ERROR_CONTACT:
      return { ...state, isError: true };
    default:
      return state;
  }
};

export default contactReducer;
