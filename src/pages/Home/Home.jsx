import React, { useEffect } from "react";

import * as css from "./css/Home";

import Frame from "components/frame/Frame";

import { getUrlQuery, handleDomain } from "utils/Util";

import { getUrlInfo } from "api/api";

function Home(props) {
  let { location } = props;
  useEffect(() => {
    let query = getUrlQuery(location.search);
    let domain = handleDomain(query.domain);

    const fetchData = async ({ domain }) => {
      let response = await getUrlInfo({ domain });
      let urlInfo = response.data.Result;
    };

    fetchData({ domain });
  }, [location.search]);

  return (
    <css.Home className="Home">
      <Frame />
    </css.Home>
  );
}

export default Home;
