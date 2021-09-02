const express = require('express');

const app = express() //accediendo a las funcionalidades de express

const PORT = 8000;

//midlewares para realizar consulta POST
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//para la conexion con la base de datos:
const connectDataBase = require('./config/mongoDB.config');
connectDataBase();

//rutas:
app.use('/api',require('./routes/jokes.routes'));





//comprobar que el servidor esta corriendo
app.listen(PORT,()=>{
  console.log(`1: Server loading on port: ${PORT}`);
})