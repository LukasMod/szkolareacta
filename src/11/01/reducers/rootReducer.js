import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  contact: contactReducer,
});

export default rootReducer;
