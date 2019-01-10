var express = require('express');
var router = express.Router();
const MusicController = require('../controllers/musicController');

router.get('/', MusicController.searchSong)
module.exports = router;
