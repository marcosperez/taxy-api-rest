// middleware.js
var jwt = require('jwt-simple');
var moment = require('moment');
var settingsConfig = require('../config/settings/settings-config');

exports.ensureAuthenticated = function (req, res, next) {

    if (req.url == '/auth/login' || req.url == "/auth/signup") {
        next();
    } else {
        if (!req.headers.authorization) {
            return res
                .status(403)
                .send({
                    message: "Tu petición no tiene cabecera de autorización"
                });
        }


        var token = req.headers.authorization.split(" ")[1];
        var payload = jwt.decode(token, settingsConfig.settings.TOKEN_SECRET);

        if (payload.exp <= moment().unix()) {
            return res
                .status(401)
                .send({
                    message: "El token ha expirado"
                });
        }

        req.user = payload.sub;
        next();
    }
}
