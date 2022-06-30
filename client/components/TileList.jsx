import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems, selectItems } from '../slices/items'

// import components:
import Tile from './Tile'

function TileList() {
  const dispatch = useDispatch()
  useEffect(async () => {
    dispatch(fetchItems())
  }, [])
  const itemsData = useSelector(selectItems)

  return (
    <>
      <section className="tilelist-wrapper">
        {itemsData.map((product) => {
          return <Tile key={product.id} titleName={product.item_name} />
        })}
      </section>
    </>
  )
}

export default TileList
