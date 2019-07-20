import React from 'react'
import * as css from './css/styled'

const AmountBlock = props => {
  const { amount, color, title } = props
  const width = 80 + (amount - 0) / 5000
  const wrapperWidth = width + 20
  return (
    <css.styledAmountBlock className="wrapper" width={wrapperWidth}>
      <css.styledContent width={width} background={color}>
        {title}
      </css.styledContent>
      <css.styledNumber start={wrapperWidth}>{amount}</css.styledNumber>
    </css.styledAmountBlock>
  )
}

export default AmountBlock