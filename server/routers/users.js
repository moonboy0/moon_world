const { json } = require('express')
const express = require('express')
const mongoose = require("mongoose")
const router = express.Router()
const schema = new mongoose.Schema({
    user_name : {type:String,required:true,min:6,max:20},
    password : {type: String , required:true , min:8,max:16},
    first_name : String,
    last_name : String
})
let User = mongoose.model("user",schema)

router.get('/',async(req,res)=>{
    let users = await User.find({})
    res.status(200).json({
        data : users,
        mssg: "everything is okay"
    })
})
router.get("/:id",async(req,res)=>{
    let user = await User.findById(req.params.id)
    if(!user){
        return res.status(200).json({
            data : null,
            mssg:"we dont have a user with this id"
        })
    }
    res.status(200).json({
        data : user,
        mssg:"everything is okay"
    })
})
router.post("/",async(req,res)=>{
    let user = new User({
        user_name : req.body.user_name,
        password:req.body.password,
        first_name : req.body.first_name,
        last_name : req.body.last_name
    })
    user.save()
    res.status(200).json({
        data:user,
        mssg:"everything is okay"
    })
})

router.put("/:id",async(req,res)=>{
    let user = await User.findByIdAndUpdate(req.params.id,{
        user_name : req.body.user_name,
        password:req.body.password,
        first_name : req.body.first_name,
        last_name : req.body.last_name
    },{new:true})
    if(!user){
        return res.status(200).json({
            data:null,
            mssg:"we dont have a user with this id"
        })
    }
    res.status(200).json({
        data:user,
        mssg:"everything is okay"
    })
})
router.delete("/:id",async(req,res)=>{
    let user = await User.findByIdAndDelete(req.params.id)
    let users = await User.find()
    if(!user){
        return res.status(200).json({
            data : null,
            mssg:"we dont have a user with this id"
        })
    }
    res.status(200).json({
        data:users,
        mssg:"everything is okay"
    })
})
module.exports = router