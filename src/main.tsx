import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./pages/App";
import configureStore from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyles";

const Main: React.SFC = (): React.ReactElement => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  );
};

export default Main;
