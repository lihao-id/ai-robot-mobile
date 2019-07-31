import React from "react";
import * as css from "./css/Titles";

function AnimateSpanList({ text, delay, right }) {
  return text.split("").map((item, index) => (
    <css.AnimateSpan
      right={right}
      duration={0.8}
      delay={delay + index * 0.05}
      key={index}
    >
      {item}
    </css.AnimateSpan>
  ));
}

function Titles(props) {
  let { width, height, className, domain } = props;
  const h1 = "5g商城";
  const h2 = "智能网络服务";

  return (
    <css.StyledTitles
      className={`Titles ${className}`}
      width={width}
      height={height}
    >
      <css.TitleWrapper>
        <css.H1>
          <AnimateSpanList delay={0} text={h1} />
        </css.H1>
        <css.H2>
          <AnimateSpanList delay={0.1} text={h2} />
        </css.H2>
        <css.Url>
          <AnimateSpanList right={true} delay={0.3} text={domain} />
        </css.Url>
      </css.TitleWrapper>
    </css.StyledTitles>
  );
}

export default Titles;
