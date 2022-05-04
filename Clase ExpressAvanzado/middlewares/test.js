const saludo = (req,res,next)=>{
    const {admin} = req.query

    if(admin == "true"){
        next();
    }else{
        console.log('No pasa querido')
    }    
}

module.exports = saludo;
