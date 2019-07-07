import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";

function Error404() {
  return <h1>error-404</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
