import React from 'react'

function AddTile() {
  return (
    <>
      <section className="add-tile-wrapper">
        <input
          className="add-tile-input"
          placeholder="Enter contributor name"
        />
        <input className="add-tile-input" placeholder="Enter item name" />
        <button className="add-tile-btn">Add</button>
      </section>
    </>
  )
}

export default AddTile
