const {Sequelize}=require('sequelize');
// const { IsEmail, AutoIncrement } = require('sequelize-typescript');


//create the constructor for the connection 
const sequelize =new Sequelize('TheJituDB','sa','1234',{
    host:'localhost',                                            //create the sequelize instance
    dialect:'mssql'

})
async function connectDatabase(){
    
try{
    sequelize.authenticate().then(()=>{
        console.log('connection has been established successfully')
    })
    
}
catch(error){                                                         //connect to the database

   console.error('unable to connect to the database', error);
}

// finally{
//     setTimeout(()=>{
//         sequelize.close();
//         console.log("connection close")
//     },10000)
    
// }

}
connectDatabase()

// sequelize.close()


//create the model
const decodeUsers= sequelize.define(
    "decodeUsers",
    {   
        id:
        {
            type:Sequelize.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        firstName:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false
        },  
        lastName:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false
        },
          
        email:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
           validate:{
                isEmail:true
           }
        },
        userName:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
           
        },

        github:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
                isAlphanumeric:true,
                len:[1,30]
            }
        },
      
        dateJoined:{
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW // or default date option two default "defaultValue:()=> new Date()"
        }
    },
    {
        freezeTableName:true,
        timestamps:false
    }
   
    
)
//questions Model
// const questions =sequelize.define(
//     'questions',
//     {
//         id:{
//                 type:Sequelize.UUID,
//                 allowNull:false,
//                 unique:true,
//                 primaryKey:true

//             },
//         questionTitle:{
//             type:Sequelize.STRING,
//             allowNull:false,
//             validate:{
//                 notEmpty:true,
//                 len:[3,50]
               
//             }

//         },
//         questionDescription:{
//             type:Sequelize.STRING,
//             allowNull:false,
//             valiidate:{
//                 notEmpty:false
//             }
//         },
//         questionTag:{
//             type:Sequelize.STRING,
//             allowNull:false,
//             validate:
//             {
//                 notEmpty:true
//             }
//         }
//     }
    
    
    
//     )

//synchronize with the database
sequelize.sync({alter:true})
    .then(()=>{
        console.log('database and tables created')
    })
    .catch((error)=>{
        console.error('error in creating database', error)
    })


//hook for aftercreate user
// decodeUsers.afterCreate(async (decodeUsers,options)=>{
//     console.log("New User has been created:");
//     console.log(decodeUsers.userName);
//     console.log(decodeUsers.email)
// })


// insert data

async function createUser(){
    try {
        const user =await decodeUsers.create({
            firstName:"Vladimir",
            lastName:"Zelensky",
            userName:"Vladimir",
            email:"vladimirzelenesky@gmail.com",
            github:"vladzelenesky",
            password:"Password123"
        
        })
        console.log(`user ${user.userName} has been created successfully`)
        
    } catch (error) {
        console.log("error in creating user", error)
        
    }
}
createUser()

console.log(sequelize.models.decodeUsers);
  