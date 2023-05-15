const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./routers/users")
const port = 5000
const app = express()
app.use(cors())
app.use(express.json())


async function connect(name){
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/${name}`)
        console.log(`connected to ${name}`);
    }catch(e){
        console.log(e);
    }
}
connect("moon_world")
app.use("/users",userRouter)
app.listen(port,()=>{
    console.log(`running on ${port}`);
})