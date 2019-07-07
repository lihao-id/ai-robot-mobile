import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./Test.scss";

import mp3 from "./1.mp3";

function Test() {
  const elBgMusic = React.createRef();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // elBgMusic.current.play();

    document.addEventListener(
      "WeixinJSBridgeReady",
      function() {
        elBgMusic.current.play();
      },
      false
    );
    // 其他应用在click/touch时触发播放
    document.addEventListener("click", function() {
      elBgMusic.current.play();
    });
    document.addEventListener("touchstart", function() {
      elBgMusic.current.play();
    });
  });
  return (
    <React.Fragment>
      <h1>{play}</h1>
      {/* <iframe className="iframe" src={mp3} allow="autoplay" /> */}
      {/* <embed height="0" width="0" src={mp3} /> */}
      <object height="0" width="0" data={mp3} />
      <audio ref={elBgMusic} controls autoPlay loop className="audio">
        <source src={mp3} type="audio/mpeg" />
        <source src={mp3} type="audio/mpeg" />
        <source src={mp3} type="audio/wav" />
      </audio>
    </React.Fragment>
  );
}

export default Test;
