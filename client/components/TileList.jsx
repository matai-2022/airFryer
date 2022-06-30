import React from 'react'

// import components:
import Tile from './Tile'

const testData = [
  { id: 1, name: 'Phus oil' },
  { id: 2, name: 'Air fryer' },
  { id: 3, name: 'Jingjings snacks' },
  { id: 4, name: 'EDA Crew' },
  { id: 5, name: 'Docies lemons' },
  { id: 6, name: 'Eli' },
  { id: 7, name: 'Eli' },
  { id: 8, name: 'Eli' },
]

function TileList() {
  return (
    <>
      <section className="tilelist-wrapper">
        {testData.map((product) => {
          return <Tile key={product.id} titleName={product.name} />
        })}
      </section>
    </>
  )
}

export default TileList
