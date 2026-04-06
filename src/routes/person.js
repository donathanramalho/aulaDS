const express = require('express');
const router = express.Router();
const PersonController = require('../controllers/PersonController');

router
    .get('/people', PersonController.getAll)
    .post('/people', PersonController.create)
    .get('/people/:id', PersonController.getById)
    .put('/people/:id', PersonController.update)
    .delete('/people/:id', PersonController.delete)

module.exports = router;
