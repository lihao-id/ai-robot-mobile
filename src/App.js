import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";

function Error404() {
  return <h1>error-404</h1>;
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
