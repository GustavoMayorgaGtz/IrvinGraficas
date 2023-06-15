const mysql = require('msnodesqlv8')

//Funcion para encontar al usuario actual (true si no existe false si existe o ocurre una excepcion);
const Local_findUser = (username) => {
    const promise = new Promise((resolve) => {
        try {
            const query = `select * from Usuario where username = '${username}'`;
            mysql.query(process.env.BDStringConnection, query, async (err, data) => {
                if (err) {
                    resolve(false)
                } else {
                    try {
                        const name = data[0].username;
                        if (name) {
                            resolve(false);
                        }
                    } catch (err) {
                        resolve(true)
                    }
                }
            })
        } catch (err) {
            resolve(false)
        }
    })
    return promise;
}



function createUser(res, username, password) {
    console.log("____> Peticion para crear usuario")
    try {
        Local_findUser(username).then((data) => {
            let query
            if (data) {

                query = `INSERT INTO Usuario(username, password) VALUES('${username}', '${password}');`;
                mysql.query(process.env.BDStringConnection, query, async (err, data) => {
                    if (err) {
                        console.log("___Error al crear usuario, err: " + err);
                        res.status(500).send({ Error: "Server Internal Error, err: " + err });
                    } else {
                        console.log("___Usuario creado correctamente");
                        res.status(200).send({ user: data });
                    }
                })
            } else {
                res.status(400).send({ Message: "User repeat" })
            }
        })
            .catch((err) => {
                console.log("___Error en la peticion , err: " + err);
                res.status(500).send({ Error: "Server Internal Error, err: " + err });
            })

    } catch (err) {
        console.log("___Error al crear usuario, err: " + err);
        res.status(500).send({ Error: "Server Internal Error, err: " + err });
    }
}


//Funcion para encontrar los usuarios de la plataforma y no incluir las contraseñas
function getAllUsers(res) {
    console.log("____> Peticion para encontrar los usuario")
    try {
        const query = `SELECT id, username FROM Usuario;`;
        mysql.query(process.env.BDStringConnection, query, async (err, data) => {
            if (err) {
                console.log("___Error al encontrar los usuarios, err: " + err);
                res.status(500).send({ Error: "Server Internal Error, err: " + err });
            } else {
                console.log("___Usuarios encontrados ");
                res.status(200).send(data);
            }
        })
    } catch (err) {
        console.log("___Error al encontrar los usuarios, err: " + err);
        res.status(500).send({ Error: "Server Internal Error, err: " + err });
    }
}

//Funcion para encontrar los usuarios de la plataforma a los cuales se les puede cambiar los permisos
// function getAllUsersUsuarioGeneral(res) {
//     console.log("____> Peticion para encontrar los usuario")
//     try {
//         const query = `SELECT idUsuario, type, username, rol1, rol2, rol3, rol4, rol5 FROM Usuario WHERE type = 2`;
//         mysql.query(process.env.BDStringConnection, query, async (err, data) => {
//             if (err) {
//                 console.log("___Error al encontrar los usuarios, err: " + err);
//                 res.status(500).send({ Error: "Server Internal Error, err: " + err });
//             } else {
//                 console.log("___Usuarios encontrados ");
//                 res.status(200).send(data);
//             }
//         })
//     } catch (err) {
//         console.log("___Error al encontrar los usuarios, err: " + err);
//         res.status(500).send({ Error: "Server Internal Error, err: " + err });
//     }
// }

//Control para eliminar un usuario de la plataforma
function dropUser(res, id) {
    console.log("____> Peticion para eliminar un usuario de BD")
    try {
        const query = `DELETE FROM Usuario where id = ${id}`;
        mysql.query(process.env.BDStringConnection, query, async (err, data) => {
            if (err) {
                console.log("___Error al eliminar usuario, err: " + err);
                res.status(500).send({ Error: "Server Internal Error, err: " + err });
            } else {
                console.log("___Usuario eliminado ");
                res.status(200).send(data);
            }
        })
    } catch (err) {
        console.log("___Error al eliminar usuario, err: " + err);
        res.status(500).send({ Error: "Server Internal Error, err: " + err });
    }
}


//Funcion para iniciar sesion
function login(res, username, password) {
    console.log("___> Peticion para iniciar sesion")
    try {
        const query = `select id, username from Usuario where username = '${username}' and password = '${password}'`;
        mysql.query(process.env.BDStringConnection, query, async (err, data) => {
            if (err) {
                console.log("___Error al iniciar sesion, err: " + err);
                res.status(500).send({ Error: "Server Internal Error, err: " + err });
            } else {
                const size = data.length;
                if (size == 1) {
                    console.log("___sesion iniciada");
                    res.status(200).send(data);
                } else {
                    console.log("___No se encontro al usuario");
                    res.status(404).send("Usuario no encontrado");
                }

            }
        })
    } catch (err) {
        console.log("___Error al iniciar sesion err: " + err);
        res.status(500).send({ Error: "Server Internal Error, err: " + err });
    }
}

// //Funcion para autentificar el usuario
// function authUser(res, idUsuario, username) {
//     console.log("___> Peticion para verificar usuario")
//     try {
//         const query = `select idUsuario, username, rol1, rol2, rol3, rol4, rol5, type from Usuario where username = '${username}' and idUsuario = '${idUsuario}'`;
//         mysql.query(process.env.BDStringConnection, query, async (err, data) => {
//             if (err) {
//                 console.log("___Error al verificar usuario, err: " + err);
//                 res.status(500).send({ Error: "Server Internal Error, err: " + err });
//             } else {
//                 const size = data.length;
//                 if (size == 1) {
//                     console.log("___Usuario verificado");
//                     res.status(200).send(data);
//                 }else{
//                     console.log("___No se encontro al usuario");
//                     res.status(404).send("Usuario no encontrado");
//                 }

//             }
//         })
//     } catch (err) {
//         console.log("___Error al verificar usuario err: " + err);
//         res.status(500).send({ Error: "Server Internal Error, err: " + err });
//     }
// }

module.exports = { createUser, getAllUsers, dropUser, login }