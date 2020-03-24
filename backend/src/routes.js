const express = require('express');
const OngContoller = require('./controllers/OngController');
const IncidentContoller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngContoller.list);
routes.post('/ongs', OngContoller.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentContoller.list);

routes.post('/incidents', IncidentContoller.create);
routes.delete('/incidents/:id', IncidentContoller.delete);

module.exports = routes;