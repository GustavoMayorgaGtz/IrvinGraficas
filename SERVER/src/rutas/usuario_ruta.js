const router = require('express').Router();

/*
Crear usuario
  > Parametros
    nombre string 60
    contraseña string 60
    email string 60
    telefono long
    activo byte
    rol smallint

  > ROL
    1.-administrador
    2.-usuario normal
*/
router.post('/create', (req, res) => {
   const nombre = req.body.nombre;
   const contraseña = req.body.nombre;
   const email = req.body.nombre;
   const telefono = req.body.nombre;
   const activo = req.body.nombre;
   const rol = req.body.nombre;
})

module.exports = router;