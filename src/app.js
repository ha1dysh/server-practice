const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/index');
const { errors } = require('./_middleware/index');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', routes.contacts);
app.use('/api/users', routes.users);
app.use('/api/files', routes.files);

app.use(errors.notFound);
app.use(errors.handler);

module.exports = app;
