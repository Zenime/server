const express = require('express')
const router = express.Router()
const controller = require('../controllers/animeController')

router
      .get('/', controller.getSeason)
      .get('/manga', controller.getManga)
      .get('/:year/:season', controller.searchBySeason)

module.exports = router