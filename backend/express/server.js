const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotEnv=require('dotenv')
const bodyparser=require('body-parser')
const employeeRoutes=require('./routes/EmployeeRoute')
const app=express()
const port=5500

dotEnv.config();
app.use(express.json())

app.use(cors({origin:"http://localhost:3000"}))

const connect=async ()=>{
    try
    {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to database successfully") 
    }
    catch(err){
    console.log("error in connecting database",err)
    }
};
connect();

app.use('/employees',employeeRoutes)


app.listen(port,()=>{
    console.log(`server is connected and running in port ${port}`)
})