const express = require('express');
const router = express.Router();
const { indexUser, formUser, createUser, editUser, deleteUser } = require('../controllers/UsersController');

/* GET users listing. */
router.get('/', indexUser);
router.get('/form/:id?', formUser);

router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);


module.exports = router;
