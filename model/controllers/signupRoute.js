const express = require("express")
const signupmodel=require("../model/SignUpModel")
const bcrypt=require("bcryptjs")

const router=express.Router()


hashPassGen=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPassGen(password).then(
        (hashPass)=>{
            console.log(hashPass)
        }
    )
    // let name=req.body.name
    // let age=req.body.age
    // let addres=req.body.addres
    // let mobile=req.body.mobile
    // let username=req.body.username
    // let password=req.body.password
    // let signup=new signupmodel(data)
    // let result=await signup.save()


    console.log(data)
    
    res.json(
        {
            status:"success"
        }
    )
})
module.exports=router