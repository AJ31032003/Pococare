const mongoose=require("mongoose")

const connection=mongoose.connect("mongodburl")

module.exports={
    connection
}
