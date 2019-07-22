import React from 'react'
import * as css from './css/styled'

const GlidingLine = () => {
  return (
    <div
      className="gliding-line"
      style={{
        width: '55px',
        paddingTop: '8px',
        overflow: 'hidden',
        height: 10,
      }}
    >
      <div
        className="gliding-inner"
        style={{
          position: 'relative',
          width: '128px',
        }}
      >
        <css.styledLine1
          src={require('../../../../assets/images/sliding.png')}
          className="gliding-img1"
          alt=""
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
        <css.styledLine2
          src={require('../../../../assets/images/sliding.png')}
          alt=""
          className="gliding-img2"
          style={{
            position: 'absolute',
            top: 0,
          }}
        />
        <css.styledLine3
          src={require('../../../../assets/images/sliding.png')}
          alt=""
          className="gliding-img3"
          style={{
            position: 'absolute',
            top: 0,
          }}
        />
      </div>
    </div>
  )
}

export default GlidingLine
