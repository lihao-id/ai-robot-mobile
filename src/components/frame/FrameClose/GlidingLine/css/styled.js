import styled from "styled-components";
import * as slideKeyframes from "./SlideKeyframes";
import { LineStyle, SlideDirection } from "./Var";

export const GlidingLine = styled.div``;

const Line = styled.img`
  position: absolute;
  width: ${LineStyle.width}px;
  top: 0;

  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const Line1 = styled(Line)`
  animation-name: ${slideKeyframes.slide1};

  ${SlideDirection}: ${0.5 * LineStyle.width}px;
`;

export const Line2 = styled(Line)`
  animation-name: ${slideKeyframes.slide2};

  ${SlideDirection}: ${-0.5 * LineStyle.width}px;
`;

export const Line3 = styled(Line)`
  animation-name: ${slideKeyframes.slide3};
  ${SlideDirection}: ${-1.5 * LineStyle.width}px;
`;

export const GlidingInner = styled.div`
  position: relative;
  width: ${1.5 * LineStyle.width}px;
`;
