const express = require('express');
const router = express.Router();
const {User,Post, Comment} = require('../models');

router.get("/",(req,res)=>{
   Comment.findAll().then(commentData=>{
    res.json(commentData)
   }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"something went wrong..",err})
   })
})
// router.get("/:id",(req,res)=>{
//    Post.findByPk(req.params.id,{
//     include:[User]
//    }).then((postData)=>{
//     res.json(postData)
//     // console.log(postData)
//    }).catch((err)=>{
//     console.log(err);
//     res.status(500).json({msg:"something went wrong..",err})
//    })
// })

router.post("/", (req,res)=>{
    console.log(req.body);
Comment.create({
    text:req.body.text,
}).then(commentData=>{
    res.json(commentData)
}).catch(err=>{
    console.log(err)
    res.status(500).json({msg:"something went wrong.."})
})
})

module.exports = router;