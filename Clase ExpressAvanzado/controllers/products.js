const products = require("../db/products");

module.exports = {
    root: (req,res)=>{
        res.render("products",{products});
    },
    detail: (req,res)=>{
        const {id} = req.params;
    
        const product = products.find(product=>product.id === Number(id));
    
        res.render("detail",{product});
    }
}


