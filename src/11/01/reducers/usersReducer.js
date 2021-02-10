import {
  REQUEST_USERS,
  ERROR_USERS,
  LOAD_USERS,
  RESET_USERS,
  ADD_USER,
} from './../actions/actions';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return { ...state, isLoading: true, isError: false };
    case ERROR_USERS:
      return { ...state, isLoading: false, isError: true };
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false,
      };
    case RESET_USERS:
      return { ...state, users: [], isLoading: false, isError: false };
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
