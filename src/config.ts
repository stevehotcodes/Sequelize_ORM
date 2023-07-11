import dotenv from 'dotenv'
import path from 'path'
import mssql from 'mssql'
dotenv.config({path:path.resolve(__dirname,'../../env')})


export const config={
    dialect:'mssql',
    dialectOptions:{
        options:{
            encrypt:true,  // for secure connections
        },
    },
    username:process.env.DB_USERNAME as string,
    server:process.env.DB_SERVER as string,
    database:process.env.DB_NAME as string,
    password:process.env.DB_PASSWORD as string

}
// console.log(config.username)
export default config;
