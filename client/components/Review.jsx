import React from 'react'

function Review(props) {
  return <>
  <section className='review-wrapper'>
    <h3 className='review-name'>{props.name}</h3>
    <p className='review-comment'>{props.review}</p>
  </section>
  </>
}

export default Review