var express = require('express');
var router = express.Router();
const {User}=require('../models/userModel');
const {check}=require('../lib/user_lib');



router.post('/',async (req,res,next)=>{
    let {name,pass}=req.body;
    console.log(`name is: ${name} and the pss is: ${pass}`)
    let a= await check(name)
    await User.sync();
    console.log(`Que demonios esta llegando aca: ${a}`)
    if(a){
        res.render('login',{title:"login",msg:true});        
    }else{
        await User.create({name,pass})
        res.redirect('/')        
    }
    
})

module.exports=router;