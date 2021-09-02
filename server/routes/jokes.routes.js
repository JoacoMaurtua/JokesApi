//Probar las consultas de los metodos definidos en los controladores

const express = require('express');

const router = express();

const {findAllJokes} = require('../controllers/jokes.controllers');

//ruta para encontrar a todos los usuarios:
router.get('/jokes',findAllJokes);


module.exports = router;