import { REQUEST, ERROR, LOAD, RESET, ADD } from './../actions/actions';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, isLoading: true, isError: false };
    case ERROR:
      return { ...state, isLoading: false, isError: true };
    case LOAD:
      return {
        ...state,
        users: action.payload,
        isLoading: true,
        isError: true,
      };
    case RESET:
      return { ...state, users: [], isLoading: false, isError: false };
    case ADD:
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
