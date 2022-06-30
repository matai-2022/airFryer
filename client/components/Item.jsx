import React from 'react'

// import components:
import ItemInfo from './ItemInfo'
import ReviewList from './ReviewList'

function Item() {
  return (
    <>
      <main className="item-wrapper">
        <ItemInfo />
        <ReviewList />
      </main>
    </>
  )
}

export default Item
