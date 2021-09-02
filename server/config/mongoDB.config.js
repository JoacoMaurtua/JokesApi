//Conectar mongoDB con mongoose

const mongoose = require('mongoose');

const dataBase = 'mongodb://localhost/jokes';

const connectDataBase = async() =>{
  try{
    await mongoose.connect(dataBase,{
      //midlewares para subir info a la base de datos:
      useNewUrlParser:true,
      useUnifiedTopology:true
    });
    console.log('2: connection established with the database')

  }catch(error){
    console.log(error);
  }
};

module.exports = connectDataBase;