import styled from "styled-components";

export const StyledLines = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  > .Line {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
