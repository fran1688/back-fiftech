const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

apiRoutes(app);

module.exports = app;
