import React from 'react'

// import components:
import Review from './Review'

const testData = [
  {
    id: 1,
    item_id: 1,
    reviewer_name: 'Liam',
    review: 'More pls',
    profile_image: '/images/profile.png',
  },
  {
    id: 2,
    item_id: 1,
    reviewer_name: 'Tony',
    review: 'More pls',
    profile_image: '/images/profile.png',
  },
  {
    id: 3,
    item_id: 3,
    reviewer_name: 'Saia',
    review: 'Your air fryer smells',
    profile_image: '/images/profile.png',
  },
  {
    id: 4,
    item_id: 2,
    reviewer_name: 'Tony',
    review: 'This game gives me so much anxiety ',
    profile_image: '/images/profile.png',
  },
]

function ReviewList() {
  return (
    <>
      <main className="review-list-wrapper">
        {testData.map((review) => {
          return (
            <Review
              key={review.id}
              name={review.reviewer_name}
              review={review.review}
              profileImg={review.profile_image}
            />
          )
        })}
      </main>
    </>
  )
}

export default ReviewList
