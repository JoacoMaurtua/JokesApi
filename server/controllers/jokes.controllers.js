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

const findSingleUser = (req,res) =>{
    Joke.findOne({_id:req.params.id})
    .then(result => res.json({data:result}))
        .catch(error=>{
          res.json({error:error, message:'Joke not found'})
          res.sendStatus(404)
        })
};





module.exports = {findAllJokes,findSingleUser}; //exportar todas las funcionalidades