import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./context/store/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./context/saga/Saga";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./context/store/userReducer";

const reducer = combineReducers({
  app: userReducer,
  rootReducer: rootReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
