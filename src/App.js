import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";

import Home from "pages/Home/Home";
import Open from "pages/Open/Open";
import { GlobalStyle } from "assets/css/style/style";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Router basename="/mobile-ai-robot">
          <div className="App">
            <Switch>
              <Route path="/open" component={Open} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
