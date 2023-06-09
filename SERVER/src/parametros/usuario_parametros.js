

function ValidarParametrosUsuario(nombre, password, telefono, email, activo, rol) {
    //Validar nombre
    if (!((typeof nombre == 'string') && (nombre.length <= 60))) {
        return {
            "nombre": {
                type: "string",
                maxLenght: 60,
                status: 400,
                statusTxt: "BadRequest"
            }
        }
    }
    //Validar password
    if (!((typeof password == 'string') && (password.length <= 60))) {
        return {
            "contraseña": {
                type: "string",
                maxLenght: 60,
                status: 400,
                statusTxt: "BadRequest"
            }
        }
    }
    //Validar telefono
    if (!((typeof telefono == 'number') && (telefono.toString().length <= 15))) {
        return {
            "telefono": {
                type: "number",
                maxLenght: 15,
                status: 400,
                statusTxt: "BadRequest"
            }
        }
    }
    //Validar email
    if (!((typeof email == 'string') && (email.length <= 60))) {
        return {
            "contraseña": {
                type: "string",
                maxLenght: 60,
                status: 400,
                statusTxt: "BadRequest"
            }
        }
    }
    //Validar activo
    if (!((typeof activo == 'number') && (activo.toString().length == 1))) {
        return {
            "activo": {
                type: "number ",
                param:" 1 | 0",
                maxLenght: 1,
                status: 400,
                statusTxt: "BadRequest"
            }
        }
    }
    //Validar rol
    if (!((typeof rol == 'number') && (rol == 1 || rol == 2))) {
        return {
            "rol": {
                type: "number ",
                param: "1 | 0",
                maxLenght: 1,
                status: 400,
                statusTxt: "BadRequest"
            }
        }
    }




}

module.exports = ValidarParametrosUsuario;