const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Listar todos os devs sem filtro na aplicação web.
routes.get('/devs', DevController.index);

// Salvar um dev.
routes.post('/devs', DevController.store);

// Listar os devs com filtro de geolocalização e tecnologias na aplicação mobile.
routes.get('/search', SearchController.index)

module.exports = routes;