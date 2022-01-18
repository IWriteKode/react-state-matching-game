import React from 'react'

import './Tile.css'

const Tile = (props) => {

  const dynamicColor = props.matched  || props.selected   ? {backgroundColor:props.color} : null


  return (
    <div className='Tile' style = {dynamicColor} onClick = {()=>{
      props.handleTileClicked(props.id,props.color)
    }}>
      {props.matched  || props.selected   ? <props.svg /> : null }
    </div>
  )
}

export default Tile
