import React from 'react'

function ReviewInput() {
  return <>
  <section className='review-input-wrapper'>
    <textarea className='review-input' placeholder='Enter a review?' />
    <button className='review-input-btn'>
      Add review
    </button>
  </section>
  </>
}

export default ReviewInput