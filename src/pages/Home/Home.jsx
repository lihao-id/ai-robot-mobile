import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import * as css from "./css/Home";

import Frame from "components/frame/Frame";

export default function Home() {
  return (
    <Router>
      <css.StyledHome className="Home">
        <Frame />
      </css.StyledHome>
    </Router>
  );
}
