const { DataTypes} = require("sequelize");
const {sequelize}=require('../db/db_conector');
const { User } = require("./userModel");


const Abm= sequelize.define('Abm',
{
  id: {
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement: true
},
concepto:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:"desconocida"
},
categoria:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:"desconocido",
},
tipo:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:"desconocido",
},
monto:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
},
fecha:{
    type:DataTypes.STRING,
    allowNull:false,
    defaultValue:"desconocida"
},
user_id:{
    type:DataTypes.INTEGER,
    references:{
        model:User,
        key:"id",
    }
},    

},
) 
module.exports={Abm};

