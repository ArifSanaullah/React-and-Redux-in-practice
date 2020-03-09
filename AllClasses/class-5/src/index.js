import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  number: 0,
  user: {
    name: "Arif",
    age: 22
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        user: { ...state.user, name: action.payload.user.name }
      };
    case "INCREMENT":
      return { ...state, number: action.payload.number };
    case "DECREMENT":
      return { ...state, number: action.payload.number };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
