 module.exports={
     PORT:process.env.PORT_DEV,
     DB:{
        storage:`${__dirname}/../../db/balance.sqlite3`,
        dialect:"sqlite",
        freezeTableName: true,
    },
 }