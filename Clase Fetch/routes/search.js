const router = require('express').Router();
const { searchRouter } = require('../controllers/characters');



router.get('/', searchRouter )


module.exports = router;



