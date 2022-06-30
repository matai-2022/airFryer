import React from 'react'
function Tile(props) {
  return (
    <>
      <section className="tile-wrapper" onClick={props.itemHandler}>
        <h2 className="tile-title">{props.titleName}</h2>
      </section>
    </>
  )
}
export default Tile
