import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits, selectFruits } from '../slices/fruits'

// import components:
import Header from './Header'

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
        {/* <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}
      </div>
    </>
  )
}

export default App
