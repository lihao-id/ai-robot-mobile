import { keyframes } from "styled-components";

import { LineStyle, SlideDirection as direction } from "./Var";

const lineWidth = LineStyle.width;
export const slide1 = keyframes`
  1%{${direction}: ${0.5 * lineWidth}px;}
  78%{${direction}: ${2 * lineWidth}px;}
  79%{${direction}: ${1.5 * lineWidth}px;}
  80%{${direction}: ${0.5 * lineWidth}px;}
  
`;

export const slide2 = keyframes`
  1%{${direction}: ${-0.5 * lineWidth}px;}
  78%{${direction}: ${lineWidth}px;}
  79%{${direction}: ${0.5 * lineWidth}px;}
  80%{${direction}: ${-0.5 * lineWidth}px;}
`;

export const slide3 = keyframes`
  1%{${direction}: ${-1.5 * lineWidth}px;}
  78%{${direction}: 0;}
  79%{${direction}: ${-0.5 * lineWidth}px;}
  80%{${direction}: ${-1.5 * lineWidth}px;}
`;
