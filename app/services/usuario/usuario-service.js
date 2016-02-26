
function UsuarioService() {
    // services.js
var jwt = require('jwt-simple');
var moment = require('moment');

    var settingsConfig = require('../../config/settings/settings-config');

}

function createToken(user) {
   var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };

    console.log("Token secreto: "+settingsConfig.settings.TOKEN_SECRET);

  return jwt.encode(payload, settingsConfig.settings.TOKEN_SECRET);
}

UsuarioService.prototype = {
  createToken: createToken
};

var usuarioService = new UsuarioService();

module.exports = usuarioService;
