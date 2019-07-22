import React, { useEffect } from "react";

import * as css from "./css/Home";

import Frame from "components/frame/Frame";

import { getUrlQuery } from "utils/Util";

function Home({ location }) {
  let query = getUrlQuery(location.search);
  useEffect(() => {
    let domain = query.domain;
  });

  return (
    <css.Home className="Home">
      <Frame />
    </css.Home>
  );
}

export default Home;
