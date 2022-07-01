import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../slices/items'

function ItemInfo() {
  function handleDelete() {
    alert('No takebacks!')
  }

  const { id } = useParams()
  const itemData = useSelector((state) => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const item = itemData.find((item) => item.id === Number(id))

  return (
    <>
      <section className="item-info-wrapper">
        <h2 className="item-title">{item.item_name}</h2>
        <h3 className="item-owner-name">By {item.contributor_name}</h3>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </section>
    </>
  )
}

export default ItemInfo
