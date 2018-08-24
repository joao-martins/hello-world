const routes = require('express').Router();

routes.get('/', (req, res) => {
    let name = req.query.name || 'world';

    res.render('index', { title: 'Welcome!', name } );
});

module.exports = routes;
