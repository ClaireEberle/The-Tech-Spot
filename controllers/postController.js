const express = require('express');
const router = express.Router();
const {User,Post} = require('../models');

router.get("/",(req,res)=>{
   Post.findAll().then(postData=>{
    res.json(postData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"something went wrong..",err})
   })
})
router.get("/:id",(req,res)=>{
   Post.findByPk(req.params.id,{
    include:[User]
   }).then(postData=>{
    res.json(postData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"something went wrong..",err})
   })
})

router.post("/", (req,res)=>{
    console.log(req.body);
Post.create({
    title:req.body.title,
    content:req.body.content,
    UserId:req.body.UserId
}).then(postData=>{
    res.json(postData)
}).catch(err=>{
    console.log(err)
    res.status(500).json({msg:"something went wrong.."})
})
})

module.exports = router;