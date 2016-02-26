var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsuarioSchema   = new Schema({
    nombre: String,
    categoria: String,
    contraseña: String,
    email: String,
    nivelAcceso: { type: Number, default: 0}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
