import React from 'react'
import * as css from './css/styled'
import Pentagon from './Pentagon/Pentagon'
import Title from './Title/Title'
import AmountBlock from './AmountBlock/AmountBlock'

const FrameClick = (props) => {
  const {clicks, views} = props
  return (<css.styledFrameClick className="frame-click">
    <css.styledFrameTitle>
      <Title>总点击量</Title>
      <Title>Clicks</Title>
    </css.styledFrameTitle>
    <div>
      {/* <img src={require("../../../assets/images/data.png")}/> */}
      <Pentagon />
    </div>
    <div>
      <AmountBlock
        title="浏览量"
        amount={views||666}
        color="rgba(25, 100, 113, 1)"
      >
      </AmountBlock>
      <AmountBlock
        title="点击量"
        amount={clicks || 666}
        color="rgba(4, 22, 43, 1)"
      >
      </AmountBlock>
    </div>
  </css.styledFrameClick>)
}

export default FrameClick