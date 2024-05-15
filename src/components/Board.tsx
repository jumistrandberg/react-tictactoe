import React from 'react'
import Tile from './Tile'

const Board = () => {
  return (
    <div className='board grid grid-cols-3 grid-rows-3 relative cursor-pointer'>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />

    </div>
  )
}

export default Board