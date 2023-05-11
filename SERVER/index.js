const express = require('express');
const app = express();
const conexion = require("./conexion");

conexion();
app.listen(3000, () => {
    console.log("servidor ejecutandose...");
})