import styled, { keyframes } from "styled-components";

export const StyledCircle4 = styled.div``;

export const Circle = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const twinkle = keyframes`
    1%{
        opacity:1;
    }

    100%{
        opacity:0.2;
    }
`;

export const TwinkleCircle = styled(Circle)`
  animation-name: ${twinkle};
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
