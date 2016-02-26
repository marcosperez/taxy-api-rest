
function NotaController() {
     var mongoose = require('mongoose');
    //mongoose.connect('mongodb://localhost/taxis');

    //console.log("se conecto a la base de datos.");
}

function get(req, res, next) {
  // Creación de variables para cargar el modelo

    var Nota = require('../../../models/nota');


    Nota.find(function (err, notas) {
    if (err)
        return console.error(err);
        res.status(200).json(notas);
    })
}

NotaController.prototype = {
  get: get
};

var notaController = new NotaController();

module.exports = notaController;
