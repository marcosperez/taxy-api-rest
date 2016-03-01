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

Usuario = mongoose.model('Usuario', UsuarioSchema);

UsuarioSchema.pre('save', function (next) {
    var self = this;
    Usuario.find({nombre : self.nombre}, function (err, usuarios) {
        if (!usuarios.length){
            next();
        }else{
            console.log('El usuario ya existe: ',self.name);
            next(new Error("User exists!"));
        }
    });
}) ;

module.exports = Usuario;
