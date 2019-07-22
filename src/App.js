import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";

import Home from "pages/Home/Home";
import Open from "pages/Open/Open";
import { GlobalStyle } from "assets/css/style/Style";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/open" component={Open} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
