const express = require('express')

const db = require('../db/itemsFunc')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // const items = await db function goes here
    // res.json (items)
    // return null
  } catch (error) {
    res.status(500).send('DATABASE ERROR: ' + error.message)
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const items =req.body
//     await db function goes here pass through items
//     res.sendStatus(201)
//     return null
//   } catch (error) {
//     res.status(500).send('DATABASE ERROR: ' + error.message)
//   }
// })
