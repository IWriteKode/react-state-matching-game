import React from 'react'
import Tile from '../Tile'
import './Board.css';

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  const tileArray = this.props.tiles.map((tile)=>{
      <Tile tile={...tile}/>
  })
  return (
    <div className='Board' tileArray = {tileArray} style={gridConfig}>
    </div>
  )
}

export default Board
