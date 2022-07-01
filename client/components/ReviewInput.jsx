import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {addItemReview} from '../slices/reviews'
import {useDispatch} from 'react-redux'
import { getItemReviews } from '../apis/api'


function ReviewInput() {
const [name, setName] = useState('')
const [review,setReview] = useState('')
const dispatch = useDispatch()
const {itemId}= useParams()

function handleName(event) {
  setName(event.target.value)
}


function handleReview(event) {
  setReview(event.target.value)
}

function handleSubmit(event) {
  event.preventDefault()
 dispatch(addItemReview({item_id:itemId, reviewer_name:name, review:review}))
 dispatch(getItemReviews(itemId))
}


return <>
  <form>
  <section className='review-input-wrapper'>
    <input className=''placeholder='Enter your name' onChange={handleName}/>
    <textarea className='review-input' placeholder='Enter a review?' onChange={handleReview}/>
    <button className='review-input-btn' type='submit' onClick={handleSubmit}>
      Add review
    </button>
  </section>
  </form>
  </>
 
}

export default ReviewInput