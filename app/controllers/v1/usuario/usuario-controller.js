function UsuarioController() {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/taxis');


    //console.log("se conecto a la base de datos.");
}

function login(req, res, next) {
    // Creación de variables para cargar el modelo

    var Usuario = require('../../../models/usuario');
    console.log(req.body);
    var UsuarioService = require('../../../services/usuario/usuario-service');

    Usuario.findOne({
        nombre: req.body.nombre.toLowerCase()
    }, function (err, user) {
        // Comprobar si hay errores

        //error de autenticacion
        if (err)
            return res.status(401);

        // Si el usuario existe o no
        // Y si la contraseña es correcta
        console.log(req.body.password + " ==  " + user.contraseña);
        if (user.contraseña == req.body.password) {
            //autenticacion correcta
            console.log("Enviando token...");
            return res.status(200).send({
                token: UsuarioService.createToken(user)
            });
        }
    });
}

function signup(req, res, next) {


    var Usuario = require('../../../models/usuario');
    var UsuarioService = require('../../../services/usuario/usuario-service');

    var user = new Usuario({
        nombre: req.body.nombre
        , contraseña: req.body.password
        , email: req.body.email
    });


    user.save(function (err, user) {
        if (err) return {
            console.log("en la funcion save " + err);
            return res
                .status(422)
                .send();
        } else {

            console.log("Salvando usuario: " + req.body);

            return res
                .status(200)
                .send({
                    token: UsuarioService.createToken(user)
                });
        }
    });

}

UsuarioController.prototype = {
    signup: signup
    , login: login
};

var usuarioController = new UsuarioController();

module.exports = usuarioController;
