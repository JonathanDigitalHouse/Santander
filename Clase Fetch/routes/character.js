const router = require('express').Router();

const { getCharacterById } = require('../controllers/characters');




router.get('/:id',getCharacterById )




module.exports = router;