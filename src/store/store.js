import { createStore, combineReducers } from "redux";
import { usersReducer } from "../reducers/usersReducer";

const reducers = combineReducers({
  users: usersReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
