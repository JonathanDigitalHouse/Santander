var express = require('express');
var router = express.Router();
const { getAllCharacters } = require('../controllers/characters');


/* GET home page. */
router.get('/', getAllCharacters);

module.exports = router;
