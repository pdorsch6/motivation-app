const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/all', controllers.quote.getAll);
router.post('/create', controllers.quote.create);


module.exports = router