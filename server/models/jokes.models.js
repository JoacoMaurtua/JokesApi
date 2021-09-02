//Creamos nuestro esquema:

const mongoose = require('mongoose');

const jokeShema = new mongoose.Schema({
  setUp:{
    type:String,
    required:[true,'Come on, setup required!']
  },

  punchLine:{
    type:String,
    required:[true,'Thats not funny, punchline required!']
  }

},{timestamps:true});

const Joke = mongoose.model('Jokes',jokeShema);

module.exports = Joke;

