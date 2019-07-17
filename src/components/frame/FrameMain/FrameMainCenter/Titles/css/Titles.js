import styled, { css } from "styled-components";

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

const Text = css`
  color: #00ffff;
  display: block;
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
`;

export const Url = styled.span`
  ${Text};
  font-size: 14px;
`;
