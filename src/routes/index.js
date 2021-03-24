const express = require('express');
const ContatoController = require('../controllers/ContatoController')

const router = express.Router();


module.exports = router
    .get('/contatos', ContatoController.get)
    .get('/contatos/:id', ContatoController.getById)
    .post('/contatos', ContatoController.post)
    .put('/contatos/:id', ContatoController.put)