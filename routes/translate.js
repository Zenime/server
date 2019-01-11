const express = require('express')
const router = express.Router()
const TranslateController = require('../controllers/TranslateController')

/*translate*/
router.post('/', TranslateController.translateText)

/*get lang*/
router.get('/', TranslateController.languageList)

module.exports = router