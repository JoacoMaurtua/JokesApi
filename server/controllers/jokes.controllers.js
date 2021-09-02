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

//devolver una sola broma:
const findSingleJoke = (req,res) =>{
    Joke.findOne({_id:req.params.id})
        .then(result => res.json({data:result}))
        .catch(error=>{
          res.json({error:error, message:'Joke not found'})
          res.sendStatus(404)
        })
};

//crear una broma:
const createJoke = (req,res) =>{
  Joke.create(req.body)
      .then(result => res.json({data:result}))
      .catch(error=>{
        res.json({error:error, message:'Could not create a new joke'})
        res.sendStatus(500)
      })
};

//actualizar una broma
const updateJoke = (req,res) =>{
  Joke.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(result => res.json({data:result}))
      .catch(error=>{
        res.json({error:error, message:'Could not update a new joke'})
        res.sendStatus(500)
      })
}


module.exports = {findAllJokes,findSingleJoke,createJoke,updateJoke}; //exportar todas las funcionalidades