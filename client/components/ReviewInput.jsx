import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addItemReview, fetchItemReviews } from '../slices/reviews'
import { useDispatch } from 'react-redux'
import { getRandomDogImage } from '../apis/api'

function ReviewInput() {
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(async () => {
    const dog = await getRandomDogImage()
    setImage(dog)
  }, [])

  function handleName(event) {
    setName(event.target.value)
  }

  function handleReview(event) {
    setReview(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setName('')
    setReview('')
    console.log('this is fogg ', image)
    dispatch(
      addItemReview({
        item_id: id,
        reviewer_name: name,
        review: review,
        profile_image: image,
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

  return (
    <>
      {/* <form> */}
      <form className="review-input-wrapper">
        <input
          className="review-name-input"
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
      </form>
      {/* </form> */}
    </>
  )
}

export default ReviewInput
