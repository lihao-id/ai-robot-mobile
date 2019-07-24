import React, { useEffect } from "react";
import * as css from "./css/Home";
import Frame from "components/frame/Frame";
import { getUrlQuery, handleDomain } from "utils/Util";
import { getUrlInfo } from "api/api";
import { setInfo } from "store/Frame/Action";
import { connect } from "react-redux";

function Home(props) {
  let { location, info, setInfo } = props;
  useEffect(() => {
    let query = getUrlQuery(location.search);
    if (!query.domain) {
      return;
    }
    let domain = handleDomain(query.domain);

    const fetchData = async ({ domain }) => {
      let response = await getUrlInfo({ domain });
      setInfo(response.data.Result);
    };

    try {
      fetchData({ domain });
    } catch (error) {
      console.log("[error]:%o", error);
    }
  }, [location.search, setInfo]);

  return (
    <css.Home className="Home">
      <Frame info={info} />
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
