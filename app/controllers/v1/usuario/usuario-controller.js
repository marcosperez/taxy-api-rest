
function UsuarioController() {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/taxis');
    
    
}

function get(req, res, next) {
  var Nave = require('../../models/usuario');
    
  res.status(200).json({ hello: 'world' });
}

UsuarioController.prototype = {
  get: get
};

var usuarioController = new UsuarioController();

module.exports = usuarioController;
