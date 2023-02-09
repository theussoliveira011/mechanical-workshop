var express = require('express');
var router = express.Router();
const { index } = require('../controllers/UsersController');

/* GET users listing. */
router.get('/', index);

module.exports = router;
