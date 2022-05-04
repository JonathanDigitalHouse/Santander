const router = require("express").Router();

//funciones de req y res
const {root,detail} = require("../controllers/products");

router.get("/", root);
router.get("/detail/:id?", detail);

module.exports = router;