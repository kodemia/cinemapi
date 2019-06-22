
require('dotenv').config()

const express = require('express')
const cors = require('cors')

const db = require('./lib/db')

const movieRoutes = require('./routes/movie')
const roomRoutes = require('./routes/room')
const scheduleRoutes = require('./routes/schedule')

const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log('llamada')
  next()
})

app.use('/movies', movieRoutes)
app.use('/room', roomRoutes)
app.use('/schedule', scheduleRoutes)

db.noSql.connect()
  .then(() => {
    app.listen(8080, () => {
      console.log('servidor corriendo en el puerto 8080')
    })
  })
  .catch(error => {
    console.error('Error DB: ', error)
  })
