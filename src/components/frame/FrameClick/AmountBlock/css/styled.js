import styled from 'styled-components'

export const styledAmountBlock = styled.div`
  position: relative;
  width: ${props => props.width}px;
  border-top: 1px solid rgba(79, 255, 236, 1);
  border-right: 1px solid rgba(79, 255, 236, 1);
  height: 37px;
  margin-bottom: 5px;
`

export const styledContent = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: -1px;
  height: 27px;
  width: ${props => props.width}px;
  background-color: ${props => props.background};
`

export const styledNumber = styled.p`
  display:  flex;
  transform: translateX(${props => props.start + 5}px);
`
