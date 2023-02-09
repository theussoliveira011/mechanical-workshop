const express = require('express');
const router = express.Router();
const { index, createService, deleteService } = require('../controllers/ServiceController');

router.get('/', index);
router.get('/create', createService);
router.get('/delete/:id', deleteService);

module.exports = router;