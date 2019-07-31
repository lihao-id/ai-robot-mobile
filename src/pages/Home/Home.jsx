import React, { useEffect } from "react";
import * as css from "./css/Home";
import Frame from "components/frame/Frame";
import * as Util from "utils/Util";
import { setInfo } from "store/Frame/Action";
import { connect } from "react-redux";
import * as API from "api/api";

function Home(props) {
  let { location, info, setInfo } = props;

  let query = Util.getUrlQuery(location.search);
  let domain = Util.handleDomain(query.domain);
  //获取网站
  useEffect(() => {
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

  return (
    <css.Home className="Home">
      <Frame info={info} domain={query.domain} />
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
