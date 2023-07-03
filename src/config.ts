import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname,'../../env')})


export const config={
    dialect:'mssql',
    dialectOptions:{
        options:{
            encrypt:true,  // for secure connections
        },
    },
    server:'localhost',
    username:'sa',
    database:'TheJituDB',
    password:'1234',

}
// console.log(config.username)
module.exports='config';

