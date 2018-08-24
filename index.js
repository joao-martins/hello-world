const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(3000);
