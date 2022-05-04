const fs = require('fs');
const {validationResult} = require('express-validator');



module.exports = {
    register: (req,res)=>{
        res.render("register",{errors:[]});
    },
    registerPost : (req,res)=>{

        //validación de errores
        const errors =  validationResult(req);

        //Leo archivo
        const users = JSON.parse(fs.readFileSync('./db/users.json','utf-8'));
        
        
        if(!errors.isEmpty()){
            
            res.render('register',{
                errors: errors.array()
            })
        }else{

            users.push(req.body);

            //Escribo y reemplazo el nuevo archivo
            fs.writeFileSync('./db/users.json',JSON.stringify(users))


            res.send('Registrado!!😍😍😊🚀💖🌠😋');


        }
        // console.log(req.body);
    }
}