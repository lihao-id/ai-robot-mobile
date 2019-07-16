import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";

import Home from "pages/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
