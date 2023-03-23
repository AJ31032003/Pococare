const express=require("express")
const cors=require("cors")
const { connection } = require("./configs/connection")
const { UserRouter } = require("./Routes/userRoutes")
const { authenticate } = require("./middleware/authenticate")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/",UserRouter)
app.get('/protected', authenticate, (req, res) => {
    res.send('This is a protected route');
});


app.listen(3001,async()=>{
    try {
        await connection
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
})