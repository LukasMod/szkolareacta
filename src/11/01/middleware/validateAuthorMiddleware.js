import { ADD } from "../actions/appActions";

export const validateAuthorMiddleware = (store) => (next) => (action) => {
  console.log(action);
  if (action.type === ADD && !action.payload.author.length) {
    console.warn("Autor nie ma imienia i nazwiska");
    return;
  }

  next(action);
};
