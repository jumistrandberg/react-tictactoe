import React from 'react'

const Line = ({ lineClass }) => {
  return (
    <div className={`${lineClass} absolute bg-lineColor`}></div>
  )
}

export default Line