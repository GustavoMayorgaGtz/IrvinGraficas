const express = require('express');
const cors = require('cors')
const parser = require('body-parser')
const app = express();
require('dotenv').config();

const allowedOrigins = ['http://localhost:4200'];
const corsOptions = {
  origin: function (origin, callback) {

    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log("----------------------------------------------------------------------------------")
      console.log("Origen de peticiones: ",origin)
      callback(null, true);
    } else {
      callback(new Error('Acceso denegado por política de CORS'));
    }
  }
};

// app.use(cors(corsOptions))//Definimos los servidores que pueden acceder
app.use(cors())
app.use(parser.urlencoded({ extended: true, limit: '25mb' }))//Limite de datos por peticion
app.use(express.static("./public")); //Para dar acceso a archivos estaticos

const usuario = require('./server/user/router');
app.use("/user", usuario);

app.listen(3000, () => {
    console.log("servidor ejecutandose...");
})