//Dependencias
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");


//Config
app.set("view engine","ejs");
app.set("views","./views/pages");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//Routes
app.use("/products", productRoutes);
app.use('/register', userRoutes);


app.use((req,res,next)=>{
    res.send('Website not found');
    next();
});








//Server
app.listen(PORT ,()=>{
    console.log("Servidor levantado")
})