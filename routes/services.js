const express = require('express');
const router = express.Router();
const { indexService, formService, createService, editService, deleteService } = require('../controllers/ServiceController');


router.get('/', indexService);

router.get('/form/:id?', formService);

router.post('/', createService);

router.put('/:id', editService)

router.delete('/:id', deleteService);

module.exports = router;