const express = require('express');
const { createUser, getAllUsers, login } = require('./controller');
const router = express.Router();

//Ruta para crear usuarios
router.post('/create', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("-------- Creando usuario --------")
    console.log(req.body);
    if (username && password) {
        createUser(res, username, password);
    } else {
        res.status(400).send("Bad Request");
    }

})

//Ruta para encontrar todos los usuarios
router.get('/findAll', (req, res) => {
    console.log("-------- Obteninedo todos los usuarios --------")
    console.log(req.body);
    getAllUsers(res);
})

//Ruta para iniciar sesion
router.post('/login', (req, res) => {
    console.log("-------- Logeando usuario --------")
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        login(res, username, password);
    } else {
        res.status(400).send("Bad Request");
    }
    login(res, username, password);
})
module.exports = router;