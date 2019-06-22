const express = require('express')

const movie = require('../usecases/mongo/movie')

const router = express.Router()

// routes get, post

router.post('/', async (req, res) => {
  try {
    console.log('post')
    const { name, length, genre } = req.body
    const newMovie = await movie.create(name, genre, length)
    res.json({
      success: true,
      data: {
        movie: newMovie
      }
    })
  } catch (error) {
    console.error('ERROR: ', error)
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allMovies = await movie.getAll()
    res.json({
      success: true,
      data: {
        movies: allMovies
      }
    })
  } catch (error) {
    console.error('Error: ', error)
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
    console.log('id: ', id)
    await movie.del(id)
    res.json({
      success: true
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false
    })
  }
})

module.exports = router
