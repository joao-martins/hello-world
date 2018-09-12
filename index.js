const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

app.engine('hbs', handlebars({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.use(routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

