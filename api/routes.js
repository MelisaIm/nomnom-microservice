'use strict';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('./controller');
const foodApi = require('../foodService/foodApi');

router.get('/help', controller.about);
router.get('/food', foodApi.getIngredientData);
module.exports = router;