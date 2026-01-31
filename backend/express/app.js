const express=require("express")
const app=express()

const port=6500

const firsthandler=((req,res,next)=>{
    if(10>20)
        next()
})

app.get('/home',firsthandler,(req,res)=>{
    res.send("Hello i am home page")
})
app.get('/about',(req,res)=>{
    res.send("THIS IA ABOUT PAGE")
})
app.get('/user/:id',(req,res)=>{
    res.send("you searched for 121")
})

app.listen(port,()=>{
    console.log(`server started and running succesfully on ${port}` )
}
)