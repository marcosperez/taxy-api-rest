
function UsuarioController() {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/taxis');

    //console.log("se conecto a la base de datos.");
}

function get(req, res, next) {
  //

    // Creación de variables para cargar el modelo

    var Usuario = require('../../../models/usuario');


    Usuario.findOne({nombre: req.body.nombre.toLowerCase()}, function(err, user) {
        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta

        if(user.contraseña == req.body.contraseña)
        {
            //autenticacion correcta
             return res
            .status(200)
            .send({token: service.createToken(user)});
        }
        else
        {
            //error de autenticacion
             return res
            .status(401);
        }


    });
}

function post(req,res,next){

    // Creación de variables para cargar el modelo
    console.log(req.body);
    //console.log(res.json(req.body));;
    //console.log("Agregando usuario...."+req.body.nombre);

    var Usuario = require('../../../models/usuario');
    var UsuarioService = req('../../../service/usuario/usuario-service');

    /*var user = new Usuario({
                                    nombre: req.body.nombre,
                                    categoria: req.body.categoria,
                                    contraseña: req.body.contrasenia,
                                    email: req.body.email
                                });*/

    user.save(function (err,user
                        ) {
                            if (err) return console.error(err);
                            console.log("cargado usuario")
                            return res
            .status(200)
            .send({token: UsuarioService.createToken(user)});
                        }
                );

}

UsuarioController.prototype = {
    get: get,
    post:post
};

var usuarioController = new UsuarioController();

module.exports = usuarioController;
