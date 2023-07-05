const {Sequelize}=require('sequelize');

const sequelize =new Sequelize('TheJituDB','sa','1234',{
    host:'localhost',                                            //create the sequelize instance
    dialect:'mssql'

})
async function connectDatabase(){
    
try{
    sequelize.authenticate()
    console.log('connection has been established successfully')
}
catch(error){                                                         //connect to the database

   console.error('unable to connect to the database', error);
}

finally{
    setTimeout(()=>{
        sequelize.close();
        console.log("connection close")
    },10000)
    
}

}
connectDatabase()

// sequelize.close()


// 