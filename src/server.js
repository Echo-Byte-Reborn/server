import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Localisation from './models/localisationModel'
import Bpm from './models/bpmModel'
import Chute from './models/chuteModel'
import Message from './models/messageModel'
import localisationRoutes from './routes/localisationRoutes'
import bpmRoutes from './routes/bpmRoutes'
import chuteRoutes from './routes/chuteRoutes'
import messageRoutes from './routes/messageRoutes'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SeulSurNamibTest', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

localisationRoutes(app)
bpmRoutes(app)
chuteRoutes(app)
messageRoutes(app)

app.get('/', (req, res) => {
  res.status(200).send({ message: 'L\'API de Seul sur Namib est en service.' })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use(function(req, res) {
  res.status(404).send({url: `${req.originalUrl} not found` })
})