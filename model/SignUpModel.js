const mongoose=require("mongoose")

const signUpSchema=mongoose.Schema(
    {
        name:String,
        age:String,
        address:String,
        mobile:String,
        username:String,
        password:String
    }
)

module.exports=mongoose.model("signup")