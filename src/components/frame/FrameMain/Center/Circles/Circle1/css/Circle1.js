import styled, { keyframes } from "styled-components";

const rotateKeyframes = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(-360deg);
    }
`;

export const StyledCircle1 = styled.canvas`
  &.rotate {
    animation-name: ${rotateKeyframes};
    animation-duration: 40s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;
