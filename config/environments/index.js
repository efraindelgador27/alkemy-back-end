require('dotenv');

const DEVELOPMENT=require('./developer');
const PRODOCTION=require('./prodoction');
const {NODE_ENV}=process.env;

let correntEnviroment;

switch(NODE_ENV){
    case 'prodoction':
        correntEnviroment=PRODOCTION
        break;
    default:
        correntEnviroment=DEVELOPMENT;
        break;
}

module.exports=correntEnviroment;

