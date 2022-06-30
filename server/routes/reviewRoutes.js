const express = require('express')

const db = require('../db/reviewsFunc')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const review = await db.getReviews()
    res.json(review)
    return null
  } catch (error) {
    res.status(500).send('DATABASE ERROR: ' + error.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const specificReviews = await db.getReviewsByItemId(id)
    res.json(specificReviews)
    return null
  } catch (error) {
    res.status(500).send('DATABASE ERROR: ' + error.message)
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const reviews =req.body
//     await db function goes here pass through items
//     res.sendStatus(201)
//     return null
//   } catch (error) {
//     res.status(500).send('DATABASE ERROR: ' + error.message)
//   }
// })

module.exports = router
