import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits, selectFruits } from '../slices/fruits'

// import components:
import Header from './Header'
import TileList from './TileList'
import Item from './Item'

function App() {
  const fruits = useSelector(selectFruits)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className="app">
        <Header />
        <TileList />
        {/* <Item /> */}
      </div>
    </>
  )
}

export default App
