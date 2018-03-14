const { Router } = require('express');
const dirRouter = Router();
const { getDirectors } = require('../controllers/directorsCtrl');

dirRouter.get('/directors', getDirectors);

module.exports = dirRouter;