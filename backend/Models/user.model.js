const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    pwd:String
},{
    versionKey:false
})

const UserModel=mongoose.model("user",UserSchema)

module.exports={
    UserModel
}