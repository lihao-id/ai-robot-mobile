import React from 'react'
import * as css from './css/styled'

const Title = (props) => {
  return (<css.styledTitle>
    {props.children}
  </css.styledTitle>)
}

export default Title