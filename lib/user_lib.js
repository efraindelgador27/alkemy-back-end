const {User}=require('../models/userModel');


const getAll= async function (){

    let data=[];
    await (await User.findAll({attributes:["id","email","pass"]})).forEach((elm)=>{data.push(elm["dataValues"])})    
    return data;
}

/// modidficar esta funcion !!!
const autenticate= async function(){
    
    User.findOne({ where: { email } }).then((user) => {
        if (!user) return done(null, false, { message: `There is no record of the email ${email}.` });
        return user.comparePassword(password).then(
        (result) => {            
        if (result) done(null, user);
        else done(null, false, { message: 'Your email/password combination is incorrect.' });
        });
    }).catch((err) => {
        console.log(err);
        done(null, false, { message: 'Something went wrong trying to authenticate' });
    })
}





const  checkUser= async function(user){
     
   
    if(user.email && user.pass&&user){
        const {email,pass}=user;
        try{
            const {dataValues}= await User.findOne({ where: {email},attributes:['email','pass','id'] });
    
            if(dataValues && dataValues.pass==pass){                 
                
                return {userIsFinded:true,isCorrectPassword:true,user:dataValues}
    
            }else if(dataValues && dataValues.pass!=pass){ 
                return {userIsFinded:true,isCorrectPassword:false, userId:null}
            }    
            else{                
                return {userIsFinded:false,isCorrectPassword:false,userId:null};
            }   
        }
        catch{
            return {userIsFinded:false,isCorrectPassword:false,userId:null};
        }  
    }else{
        return {userIsFinded:false,isCorrectPassword:false,userId:null};
    }              
}

const exixt=async function(userName){
    
    const user=await User.findOne({where:{email:userName}})
    
    if(user){return true}
    else{return false}
};

const create=async function(data){

    console.log(data);
    try{
        const newUser= await  User.create(data);
       // await newUser.save();
        console.log(`El usuarion ${newUser.email} a sido creado`)
        return {user:true,msj:`El usuarion ${newUser.email} a sido creado`};
    }catch{
        return {user:false,msj:"Ocurrio un problema durante el guardado de datos"}
    }
    

}
module.exports={getAll,checkUser,exixt,create}