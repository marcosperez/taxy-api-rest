function UsuarioService() {
    // services.js


}

function createToken(user) {
    var jwt = require('jwt-simple');
    var moment = require('moment');

    var settingsConfig = require('../../config/settings/settings-config');

    console.log("creando token...");
    var payload = {
        sub: user._id
        , iat: moment().unix()
        , exp: moment().add(14, "days").unix()
    , };

    console.log("Token secreto: " + settingsConfig.settings.TOKEN_SECRET);

    return jwt.encode(payload, settingsConfig.settings.TOKEN_SECRET);
}

function existeUsuario(usuario) {
    var Usuario = require('../../models/usuario');

    Usuario.findOne({
        nombre: usuario.nombre.toLowerCase()
    }, function (err, user) {
        if (err) {
            console.log("Error: "+err);
            return err;
        }

        console.log("usuario: "+user);
        if(user == null)
            return false;
        else
            return true;
    });
}

UsuarioService.prototype = {
    createToken: createToken
    , existeUsuario: existeUsuario
};



var usuarioService = new UsuarioService();

module.exports = usuarioService;
