const express = require('express')

const room = require('../usecases/sql/room')

const router = express.Router()

// routes get, post

router.post('/', async (req, res) => {
  try {
    const { number, capacity, category } = req.body
    const newRoom = await room.create(number, capacity, category)
    res.json({
      success: true,
      data: {
        room: newRoom
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allRooms = await room.getAll()
    res.json({
      success: true,
      data: {
        rooms: allRooms
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await room.del(id)
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})
module.exports = router
