import {Sequelize, DataTypes,Model} from 'sequelize'
// import {Table,Column,Model as DecoratorModel} from 'sequelize-typescript'
import  config  from './config'



const sequelize= new Sequelize(config.username, config.database, config.password,{
    host:config.server as string,
    dialect:'mssql',
    dialectOptions:config.dialectOptions


});

//Test the connections
sequelize
.authenticate()
.then(()=>{
    console.log(" Connection created successfully");

})
.catch((err)=>{
    console.log('error occurred during server connections:',err)
})


// console.log("hello my name is typescript");