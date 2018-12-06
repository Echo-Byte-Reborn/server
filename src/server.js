import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Localisation from './models/localisationModel'
import routes from './routes/localisationRoutes'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SeulSurNamibTest', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) =>  {
  res.send('Hello World !!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use(function(req, res) {
  res.status(404).send({url: `${req.originalUrl} not found` })
})