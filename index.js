
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const movieRoutes = require('./routes/movie')
const roomRoutes = require('./routes/room')
const scheduleRoutes = require('./routes/schedule')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/movies', movieRoutes)
app.use('/room', roomRoutes)
app.use('/schedule', scheduleRoutes)

// rutas

app.listen(8080, () => {
  console.log('servidor corriendo en el puerto 8080')
})
