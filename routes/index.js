
const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controllers');

router.get('/',homeController.home);
router.post('/create-list',homeController.create);
router.post('/delete-list',homeController.deleteTodo);
module.exports = router;