import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

function App() {
  return (
    <>
      {/* <!-- 使用iframe允许自动播放。 --> */}
      {/* <!-- autoplay自动播放 --> */}
      <iframe src={require("1.mp3")} allow="autoplay" style="display: none" />
      <audio id="back_music" controls src={require("1.mp3")} autoplay loop />
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
serviceWorker.unregister();
