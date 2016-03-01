var http = require('http');
var express = require('express')
    , cors = require('cors');
var application = express();
var bodyParser = require('body-parser');
var routeConfig = require('./route-config');
var settingsConfig = require('./settings/settings-config');

var AuthMiddleware = require('../middleware/auth');

function configureWorker(application) {
    configureApplication(application);
    configureRoutes(application);

    startServer(application);
}

function configureApplication(application) {
    application.use(bodyParser.json());

    application.use(bodyParser.urlencoded({
        extended: true
    }));

    application.use(cors());
    application.use(AuthMiddleware.ensureAuthenticated);
    application.use(function (req, res, next) {
        next();
    });
}

function configureRoutes(application) {
    routeConfig.registerRoutes(application);
}

function startServer(application) {
    var server = http.createServer(application);

    server.listen(settingsConfig.settings.workerPort, settingsConfig.settings.hostName, settingsConfig.settings.queueLength, function () {
        console.log('listening at http://%s:%s', settingsConfig.settings.hostName, settingsConfig.settings.workerPort);
    });
}

configureWorker(application);
