const routes = require('express').Router();
const workouts_routes = require('./api/workouts');
const home_routes = require('./home_routes');

routes.use('/api/workouts', workouts_routes);
routes.use('/', home_routes);

module.exports =  routes;