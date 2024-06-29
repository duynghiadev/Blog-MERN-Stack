import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App.jsx";
import "./index.css";
import reducers from "./redux/reducers/index.jsx";
import mySaga from "./redux/sagas/index.jsx";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
