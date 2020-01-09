import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store";
import App from "components/App";
import GlobalStyles from "styles/globals";
import hackerNewsApi from "services/hackerNewsApi";
import * as serviceWorker from "./serviceWorker";

hackerNewsApi.getTopStoryIds().then(ids => console.log("IDS", ids));
const renderApp = () => {
  const initState = {};
  const store = configureStore(initState);
  store.dispatch({ type: "@hnClone/@@INIT" });
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
