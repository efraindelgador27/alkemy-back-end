const {Abm}=require('../models/abmModel');


const getAllRecord= async function (userId){

    let data=[];
    await (await Abm.findAll({
        attributes:["id","monto","concepto","categoria","tipo","fecha"],
        where:{user_id:userId}
        })).forEach((elm)=>{data.push(elm["dataValues"])})    
    return data;
}
const getLastTenRecord= async function(userId){
    let data=[];
    await (await Abm.findAll({
        attributes:["id","monto","concepto","categoria","fecha","tipo"],
         limit:10,
         order:[['tipo','DESC']],
         where:{user_id:userId}
        })).forEach((elm)=>{data.push(elm["dataValues"])})    
    return data;

};
const createRecord=async function(data){

    console.log(data);
    try{
        const newAbm= await  Abm.create(data);
        await newAbm.save();
        console.log(`El registro ${newAbm} a sido creado`)
        return {abm:true,msj:`El usuarion ${newAbm} a sido creado`};
    }catch{
        return {abm:false,msj:"Ocurrio un problema durante el guardado de datos"}
    }    
}

const updateRecord=async function(recordId,body){
    
        let register;
        Abm.update(
            body,
           { where:{id:recordId}}
        ).then((succes)=>{
            register=succes
        }).catch((err)=>{
            console.log(err)
        })
    
        return register;

}

const deleteRecord=async function(abmId){
    
    Abm.destroy()
    const data= await Abm.destroy({        
        where:{id:abmId},       
        })
    return data;

};



module.exports={getAllRecord,getLastTenRecord,createRecord,deleteRecord,updateRecord}

