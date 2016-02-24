
function UsuarioController() {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/taxis');

    //console.log("se conecto a la base de datos.");
}

function get(req, res, next) {
  //

    // Creación de variables para cargar el modelo

    var Usuario = require('../../../models/usuario');


    Usuario.find(function (err, users) {
    if (err)
        return console.error(err);
        res.status(200).json(users);
    })
}

function post(req,res,next){

    // Creación de variables para cargar el modelo
    console.log(req.body);
    //console.log(res.json(req.body));;
    console.log("Agregando usuario...."+req.body.nombre);
    var Usuario = require('../../../models/usuario');

    var user = new Usuario({
                                    nombre: req.body.nombre,
                                    categoria: req.body.categoria,
                                    contraseña: req.body.contrasenia,
                                    email: req.body.email
                                });

    user.save(function (err,user
                        ) {
                            if (err) return console.error(err);
                            console.log("cargado usuario")
                        }
                );

}

UsuarioController.prototype = {
    get: get,
    post:post
};

var usuarioController = new UsuarioController();

module.exports = usuarioController;
