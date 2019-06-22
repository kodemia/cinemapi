const express = require('express')

const scheduleUsecase = require('../usecases/sql/schedule')

const router = express.Router()

// routes get, post

router.post('/', async (req, resp) => {
  try {
    const { roomId, movieId, schedule } = req.body
    const newSchedule = await scheduleUsecase
      .create(roomId, movieId, schedule)
    resp.json({
      success: true,
      data: {
        schedule: newSchedule
      }
    })
  } catch (error) {
    resp.status(400)
    resp.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
