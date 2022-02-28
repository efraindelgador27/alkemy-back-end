const express = require('express');
const router = express.Router();
const {exixt,create}=require('../../lib/user_lib');
const validar=require('../../lib/validation_lib')
const cors = require('cors')

router.post('/sigin',async (req,res,next)=>{
    
    const{email,pass,confirmPass}=req.body;

    const validarData=validar(email,pass,confirmPass);
    const existThisUser=await exixt(email);

    if(!existThisUser){
        if(validarData.isSecurePass && validarData.isIcualPass && validarData.isValidEmail){
            console.log(req.body);
            const newUser= await create(req.body);
           
            res.json({newUser});
        }
        else if(!validarData.isSecurePass){
            res.json({title:"login",msg:"tu contraseña daba tener al menos 10 caracteres, numeros mayusculas minusculas y al menos 1 caracter especial"});
        }
        
    }
    else{
        res.json({title:"login",msg:"Existe otra cuenta registrada con este email"});
    }
    
})


module.exports=router