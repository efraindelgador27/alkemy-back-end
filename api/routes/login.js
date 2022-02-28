var express = require('express');
var router = express.Router();
const {checkUser}=require('../../lib/user_lib');


router.post('/login',async(req,res)=>{
  
  
    const {userIsFinded,isCorrectPassword,user}=await checkUser(req.body)
    

    if(userIsFinded&&isCorrectPassword){    
  
         res.json({userEmail:user.email,userId:user.id,isAutenticate:true})
    }else if(userIsFinded && !isCorrectPassword){
        res.json({userEmail:"",isAutenticate:false})
   }else{
        res.json({userEmail:"",isAutenticate:false})
    }
    
})

router.get('/exp', function(req, res) {
    res.json({registros:"todos los gastos"});
  });

module.exports=router
