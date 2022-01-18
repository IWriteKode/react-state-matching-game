import React from 'react'

import './Tile.css'

const Tile = (props) => {

  const color = props.matched == true || props.selected == true ? '#00aa00' : '0000aa';


  return (
    <div className='Tile'>
    </div>
  )
}

export default Tile
