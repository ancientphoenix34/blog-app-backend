const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://farseen1:123456789abc@cluster0.b2hgr1s.mongodb.net/blogDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/signup",signupRoute)

app.listen(3001,()=>{
    console.log("server running")
})

