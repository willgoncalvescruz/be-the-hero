const express = require('express');

const OngController = require('.controllers/OngController');
const incidentController = require('.controllers/incidentController');
const ProfileController = require('.controllers/ProfileController');
const SessionController = require('.controllers/SessionControler');

const routes = express.Router();

routes.post('/sessions',)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.create);
routes.post('/incidents', OngController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;