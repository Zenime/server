var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController')
const { verifyGoogle } = require('../middlewares')

/*google login*/
router.post('/', verifyGoogle, UserController.googleLogin)

module.exports = router;
