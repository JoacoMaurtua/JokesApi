//Probar las consultas de los metodos definidos en los controladores

const express = require('express');

const router = express();

const {findAllJokes,findSingleJoke, createJoke,updateJoke} = require('../controllers/jokes.controllers');

//ruta para encontrar a todas las bromas:
router.get('/jokes',findAllJokes);

//ruta para encontrar una sola broma:
router.get('/joke/:id',findSingleJoke);

//ruta para crear una broma:
router.post('/joke/new',createJoke);

//ruta para actualizar una broma:
router.put('/joke/update/:id',updateJoke)


module.exports = router;