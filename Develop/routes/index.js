const express = require('express');

const noteRoutes = require('./routess');

const app = express();


app.use('/notes', noteRoutes);

module.exports = app;