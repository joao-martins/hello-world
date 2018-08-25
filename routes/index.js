const routes = require('express').Router();
const greeter = require('../service/greeter');

routes.get('/', (req, res) => {
    const { name, city } = req.query;
    
    message = greeter.buildMessage(name, city);

    res.render('index', { title: 'Welcome!', message } );
});

module.exports = routes;
