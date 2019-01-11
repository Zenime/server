var express = require('express');
var router = express.Router();
const VoicerController = require('../controllers/voicerController')

router.get('/', VoicerController.speech)
module.exports = router;
