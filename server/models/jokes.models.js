//Creamos nuestro esquema:

const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  setUp:{
    type: String,
    required:[true,'COME ON, SETUP REQUIRED!']
  },

  punchLine:{
    type: String,
    required:[true,'Thats not funny, punchline required!']
  }

},{timestamps:true});

const Joke = mongoose.model('Jokes',jokeSchema);

module.exports = Joke;

