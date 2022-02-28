const { DataTypes} = require("sequelize");
const {sequelize}=require('../db/db_conector')

const User= sequelize.define('User',
{
  id: {
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement: true
},
email: DataTypes.STRING,    
pass: DataTypes.STRING,    
},
) 
module.exports={User};
  