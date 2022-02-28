const {asClass, createContainer, asFunction,asValue}=require('awilix');
const Server = require('./server');
const {}=require('./server');


const container=createContainer();

container.register({
    app:asClass(Server).singleton()
});
module.exports=container;
