import React, { useEffect, useRef } from "react";
import * as css from "./css/Titles";

function Titles({ width, height, className }) {
  return (
    <css.StyledTitles
      className={`Titles ${className}`}
      width={width}
      height={height}
    >
      <css.TitleWrapper>
        <css.H1>5g商城</css.H1>
        <css.H2>智能网络服务</css.H2>
        <css.Url>www.shangtong.com</css.Url>
      </css.TitleWrapper>
    </css.StyledTitles>
  );
}

export default Titles;
