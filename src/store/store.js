import { createStore, applyMiddleware, compose } from "redux";
import usersReducer from "../reducers/users";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  usersReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
  console.log("store data:", store.getState());
});

export default store;
