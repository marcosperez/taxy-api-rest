var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsuarioSchema   = new Schema({
    nombre: String,
    categoria: { type: String, default: 'user'},
    contraseña: String,
    email: String,
    nivelAcceso: { type: Number, default: 0},
    fechaCreacion:{type:Date , default:Date.now}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
