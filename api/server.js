// https://expressjs.com/en/resources/middleware/cors.html  LEER ...

const express = require('express');
const logger = require('morgan');
const abmRouts=require('./routes/abmRouts')
const siginRouts=require('./routes/sigin')
const loginRouts=require('./routes/login')
const userRouts=require('./routes/users');
const {User}=require('../models/userModel')
const {Abm}=require('../models/abmModel');
const cors=require('cors')


//const { sequelize } = require('./db/db_conector');


class Server {
    constructor(config){
      this._config=config;
      this.express=express();  
      this.express.use(cors());
      this.express.use(logger('dev'))
      this.express.use(express.json());      
      this.express.use(express.urlencoded({ extended: false }));   
      this.express.use('/api',abmRouts)
      this.express.use('/api',siginRouts)
      this.express.use('/api',userRouts)
      this.express.use('/api',loginRouts)
    }

   async start(){   
      await User.sync();   
      await Abm.sync();
      await this.express.listen(this._config.port,()=>{
          console.log(`runing on port ${this._config.port}`)
      })
    }
  }
  
 module.exports=Server;
