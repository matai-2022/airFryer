import request from 'superagent'

const rootUrl = '/api/v1'

export async function getItems() {
  try {
    const items = await request.get('api/v1/items')
    return items.body
  } catch (error) {
    console.error(error.message)
  }
}

export async function getItemReviews(id) {
  try {
    const reviews = await request.get(`api/v1/reviews/${id}`)
    console.log('reviews', reviews.body)
    return reviews.body
  } catch (error) {
    console.error(error.message)
  }
}
