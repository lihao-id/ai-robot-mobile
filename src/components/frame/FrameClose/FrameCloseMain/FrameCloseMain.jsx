import React from 'react'
import * as css from './css/styledCloseMain'

import GlidingLine from '../GlidingLine/GlidingLine'

const FrameCloseMain = () => {
  return (
    <css.frameCloseMain className="close-main">
      <p
        style={{
          margin: 0,
          paddingTop: '5px',
        }}
      >
        关闭
      </p>
      <GlidingLine />
    </css.frameCloseMain>
  )
}

export default FrameCloseMain
