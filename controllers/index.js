/**
 * Modules Index. Defines the routes for /public and dynamic data.
 * @type {Router}
 */

const routes = require('express').Router();
const workouts_routes = require('./api/workouts');
const home_routes = require('./home_routes');

// Static routes
routes.use('/', home_routes);

// Dynamic routes
routes.use('/api/workouts', workouts_routes);

module.exports =  routes;