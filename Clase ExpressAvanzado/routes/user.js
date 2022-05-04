const router = require("express").Router();
const {register,registerPost} = require('../controllers/users');
const {body} = require('express-validator');


const validarUser = [ 
    body('name').notEmpty().withMessage("El nombre es requerido"),
    body('dni').notEmpty().withMessage('El campo dni es requerido'),
    body('email').notEmpty().withMessage('El email es requerido'),
];



router.get("/",register);

router.post("/", validarUser , registerPost);


module.exports = router;
