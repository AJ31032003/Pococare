const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://aj:arihant@cluster0.mumhs.mongodb.net/pococare?retryWrites=true&w=majority")

module.exports={
    connection
}