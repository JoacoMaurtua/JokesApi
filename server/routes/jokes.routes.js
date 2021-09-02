//Probar las consultas de los metodos definidos en los controladores

const express = require('express');

const router = express();

const {findAllJokes,findSingleUser} = require('../controllers/jokes.controllers');

//ruta para encontrar a todas las bromas:
router.get('/jokes',findAllJokes);

//ruta para encontrar una sola broma:
router.get('/joke/:id',findSingleUser);


module.exports = router;