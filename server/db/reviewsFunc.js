const connection = require('./connection')

function getReviews(db = connection) {
  return db('reviews').select()
}

function getReviewsByItemId(id, db = connection) {
  return db('reviews').where('item_id', id).select()
}

module.exports = {
  getReviews,
  getReviewsByItemId,
}
