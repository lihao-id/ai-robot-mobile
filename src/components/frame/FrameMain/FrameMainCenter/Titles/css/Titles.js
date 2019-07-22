import styled, { css } from "styled-components";
import * as SpanKeyframes from "./SpanKeyframes";

export const StyledTitles = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const AnimateSpan = styled.span`
  color: rgba(0, 0, 0, 0);
  display: block;
  /* transform: translateX(-25px); */
  animation-name: ${props => SpanKeyframes.keyframesIn(props)};
  animation-duration: ${({ duration }) => duration}s;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const Text = css`
  display: flex;
`;

const Title = css`
  ${Text};
  text-transform: uppercase;
`;

export const H1 = styled.h1`
  ${Title}
`;

export const H2 = styled.h2`
  ${Title}
  > *:not(:first-child) {
    margin-left: 4px;
  }
`;

export const Url = styled.p`
  ${Text};
  justify-content: flex-end;
  font-size: 14px;
  > *:not(:first-child) {
    margin-left: 2px;
  }
`;
