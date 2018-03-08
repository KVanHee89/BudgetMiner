'use strict';
var express = require('express');
var router = express.Router();

var controller = require('../controllers/contransactions');

/* route add POST request to controller */
//router.post('/add', controller);
router.get('/add', controller.add);

/* route subtract POST request to controller*/
//router.post('/subtract', controller);
//router.get('/subtract', controller.subtract);

module.exports = router;