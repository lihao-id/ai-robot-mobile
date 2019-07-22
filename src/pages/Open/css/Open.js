import styled from "styled-components";
import * as Mixin from "assets/css/Mixin/Mixin";

export const Open = styled.button`
  width: 103px;
  height: 96px;
  opacity: 0.8;
  z-index: 990;
  ${Mixin.BgImg({ url: require("./img/BtnOpen/bg.png") })};
`;
