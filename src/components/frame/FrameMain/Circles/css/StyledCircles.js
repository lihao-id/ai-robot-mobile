import styled from "styled-components";

export const StyledCircles = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;

  .Circle:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
