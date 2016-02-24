var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NotaSchema   = new Schema({
    titulo: String,
    descripcion: String,
    fechaCreacion: { type: Date, default: Date.now },
    comentarios: [{ body: String, date: Date }],
    usuario:  { type: Schema.ObjectId, ref: "Usuario" }

});

module.exports = mongoose.model('Nota', UsuarioSchema);
