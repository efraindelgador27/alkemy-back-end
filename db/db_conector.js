// https://www.youtube.com/watch?v=5wvvyrx6Fvw&t=693s
const {DB}=require('../config/environments/developer');

const { Sequelize} = require("sequelize");

const sequelize = new Sequelize(
        'sqlite::memory:',DB
      );  

  sequelize.authenticate().then(()=>{    
    
      console.log("data base on line ...")    
  })
    

  module.exports={sequelize};
  









