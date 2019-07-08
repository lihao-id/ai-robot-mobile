import React from "react";
import "./Home.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import User from "pages/User/User";
import Goods from "pages/Goods/Goods";

export default function Home({ match }) {
  return (
    <Router>
      <div className="home">
        <h1>title-home</h1>
        <div className="content-wrapper">
          <div className="menu">
            <nav>
              <ul>
                <li>
                  <NavLink to="/user/list">UserList</NavLink>
                </li>
                <li>
                  <NavLink to="/goods/list">GoodsList</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content">
            <Switch>
              <Route path="/user/list" component={User.List} />
              <Route path="/user/:id" component={User.Info} />
              <Route path="/goods/list" component={Goods.List} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
