//Utilizar el schema para hacer la funcionalidad del CRUD

const Joke = require('../models/jokes.models');

//devolver todos los jokes de la db:
const findAllJokes = (req,res) =>{
    Joke.find({})
        .then(result => res.json({data:result}))
        .catch(error=>{
          res.json({error:error, message:'Jokes not found'})
          res.sendStatus(404)
        })
};








module.exports = {findAllJokes}; //exportar todas las funcionalidades