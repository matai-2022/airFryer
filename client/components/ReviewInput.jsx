import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  addItemReview,
  fetchAdjective,
  fetchItemReviews,
} from '../slices/reviews'
import { useDispatch, useSelector } from 'react-redux'

function ReviewInput() {
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()

  const itemData = useSelector((state) => state.items)
  const item = itemData.find((item) => item.id === Number(id))

  function handleName(event) {
    setName(event.target.value)
  }

  function handleReview(event) {
    setReview(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(
      addItemReview({ item_id: id, reviewer_name: name, review: review })
    )
      .unwrap()
      .then(() => {
        dispatch(fetchItemReviews(id))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  async function handleRandomReview(event) {
    event.preventDefault()
    const adjectivePromise = await dispatch(fetchAdjective())
    const adjectiveArray = adjectivePromise.payload.body
    const adjective = adjectiveArray[0]
    dispatch(
      addItemReview({
        item_id: id,
        reviewer_name: name,
        review: `This ${item.item_name} is ${adjective}!`,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(fetchItemReviews(id))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  console.log(id, 'this is itemID')

  return (
    <>
      <form>
        <section className="review-input-wrapper">
          <input
            className=""
            placeholder="Enter your name"
            onChange={handleName}
          />
          <textarea
            className="review-input"
            placeholder="Enter a review?"
            onChange={handleReview}
          />
          <button
            className="review-input-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Add review
          </button>
          <button
            className="review-input-btn"
            type="submit"
            onClick={handleRandomReview}
          >
            Add random review
          </button>
        </section>
      </form>
    </>
  )
}

export default ReviewInput
