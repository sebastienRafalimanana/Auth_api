var express = require('express');
var user_route = require('./routes/user_route')
const app = new express();

const CONFIG = require('./config');

/**
 * importation des dependance
 */
var  body = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');

// connection base de donne
mongoose.connect(CONFIG.get_db_connection())

app.use(cors({origin: '*'}));
app.use(body.json());
app.use(CONFIG.API_PATH, user_route());

module.exports = app;
