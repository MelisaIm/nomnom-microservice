'use strict';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('./controller');

router.get('/test', controller.about);

module.exports = router;