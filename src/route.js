const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))

// Formato que o formulário de dentro da modal deve passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
// Trabalhando com a criação das salas
route.post('/create-room', RoomController.create)

module.exports = route