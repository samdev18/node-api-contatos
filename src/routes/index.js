const express = require('express');
const ContatoController = require('../controllers/ContatoController')

const router = express.Router();


module.exports = router
    .get('/contatos', ContatoController.get)
    .post('/contatos', ContatoController.post)
    .get('/contatos/:id', ContatoController.getById)
    .put('/contatos/:id', ContatoController.put)
    .delete('/contatos/:id', ContatoController.delete)