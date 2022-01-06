const express = require('express');
const initHandlebars = require('./config/handlebars');

const {PORT}  = require('./config/config.json');

const routes = require('./routes');

const app = express();

initHandlebars(app);

app.use(express.static('static'));

app.use(routes);

app.listen(process.env.PORT || 5000, console.log.bind(console, `App is listening on port ${PORT}`));