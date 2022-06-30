import React from 'react'
import { useParams } from 'react-router-dom'

const testData = {
  id: 1,
  item_name: "Phu's chilli oil",
  contributor_name: 'Phu',
}

function ItemInfo() {
  const { id } = useParams()

  return (
    <>
      <section className="item-info-wrapper">
        <h2 className="item-title">{testData.item_name}</h2>
        <h3 className="item-owner-name">By {testData.contributor_name}</h3>
      </section>
    </>
  )
}

export default ItemInfo
