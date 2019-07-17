import styled from "styled-components";

export const StyledFrameMainCenter = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  > .Item {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
