import styled, { keyframes } from 'styled-components'

const slide1 = keyframes`
  1%{left: 0;}
  47%{left: 50%;}
  48%{left: 50%;}
  49%{left: -50%;}
  50%{left: -50%;}
  100%{left: 0;}
`

const slide2 = keyframes`
  1%{left: -50%;}
  47%{left: 0;}
  48%{left: 0;}
  49%{left: -100%;}
  50%{left: -100%;}
  100%{left: -50%;}
`

const slide3 = keyframes`
  1%{left: 50%;}
  47%{left: 100%;}
  48%{left: 100%;}
  49%{left: 0;}
  50%{left: 0;}
  100%{left: 50%;}
`

export const styledLine1 = styled.img`
  animation-name: ${slide1};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

export const styledLine2 = styled.img`
  animation-name: ${slide2};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

export const styledLine3 = styled.img`
  animation-name: ${slide3};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

export const styledWrapper = styled.div``

export const styledInner = styled.div``
