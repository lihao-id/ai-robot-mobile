import React, { useEffect, useState, useRef } from "react";
import * as css from "./css/Home";
import Frame from "components/frame/Frame";
import * as Util from "utils/Util";
import { setInfo } from "store/Frame/Action";
import { connect } from "react-redux";
import * as API from "api/api";
// import mp3 from "./audio/bg.wav";

function Home(props) {
  let { location, info, setInfo } = props;

  //获取网站
  useEffect(() => {
    let query = Util.getUrlQuery(location.search);
    console.log(query);
    let domain = Util.handleDomain(query.domain);

    const fetchData = async ({ domain }) => {
      let response = await API.getUrlInfo({ domain });
      setInfo(response.data.Result);
    };

    try {
      fetchData({ domain });
    } catch (error) {
      console.log("[error]:%o", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let [voiceUrl, setVoiceUrl] = useState(null);
  let voiceRef = useRef(null);
  //获取音效
  useEffect(() => {
    let query = Util.getUrlQuery(location.search);
    if (!query.domain) {
      return;
    }
    let domain = Util.handleDomain(query.domain);
    const fetchData = async () => {
      let response = await API.getVoice({
        url: domain
      });
      return response.data.Result;
      //   audio.addEventListener("canplaythrough", () => {
      //     audio.play();
      //   });
    };
    let voiceUrl = fetchData();
    setVoiceUrl(voiceUrl);
    let audio = voiceRef.current;

    //打开网页播放
    document.addEventListener(
      "WeixinJSBridgeReady",
      function() {
        audio.play();
      },
      false
    );

    //打开Frame播放
    // let audioObj = new Audio(voiceUrl);
    // Util.onOpenFrame(() => {
    //   audioObj.play();
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <css.Home className="Home">
      <Frame info={info} />
      {voiceUrl !== null && (
        <css.Audio ref={voiceRef} controls autoPlay>
          <source src={voiceUrl} type="audio/mpeg" />
          <source src={voiceUrl} type="audio/wav" />
        </css.Audio>
      )}
    </css.Home>
  );
}

export default connect(
  state => ({
    info: state.info
  }),
  {
    setInfo
  }
)(Home);
