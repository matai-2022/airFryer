import React from 'react'

const testData = {
  id: 1,
  item_name: "Phu's chilli oil",
  contributor_name: 'Phu',
}

function ItemInfo() {
  function handleDelete() {
    alert('No takebacks!')
  }
  return (
    <>
      <section className="item-info-wrapper">
        <h2 className="item-title">{testData.item_name}</h2>
        <h3 className="item-owner-name">By {testData.contributor_name}</h3>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </>
  )
}

export default ItemInfo
