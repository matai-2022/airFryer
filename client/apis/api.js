import request from 'superagent'

const itemsUrl = '/api/v1/items'
const reviewsUrl = '/api/v1/reviews'

export async function getItems() {
  try {
    const items = await request.get(itemsUrl)
    return items.body
  } catch (error) {
    console.error(error.message)
  }
}

export async function postItem(item) {
  try {
    await request.post(itemsUrl).send(item)
  } catch (error) {
    console.error(error.message)
  }
}

export async function getItemReviews(id) {
  try {
    const reviews = await request.get(`${reviewsUrl}/${id}`)
    console.log('reviews', reviews.body)
    return reviews.body
  } catch (error) {
    console.error(error.message)
  }
}

export async function postItemReviews(review) {
  try {
    await request.post(`${reviewsUrl}`).send(review)
  } catch (error) {
    console.error(error.message)
  }
}
