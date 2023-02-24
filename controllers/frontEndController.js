const express = require('express');
const router = express.Router();
const {User,Post} = require('../models');

router.get("/", (req,res)=>{
    Post.findAll({
        include:[User]
    }).then(postData=>{
        
        const hbsPosts = postData.map((posts)=>posts.toJSON());
        res.render("home", {
            allPosts:hbsPosts
        })
    })
})
router.get("/login", (req,res)=>{
    res.render("login")
})
router.get("/signup", (req,res)=>{
    res.render("signup")
})
router.get("/profile", (req,res)=>{
    if(!req.session.userId){
        return res.redirect("/login")
    }
    User.findByPk(req.session.userId,{
        include:[{all:true,nested:true}]
    }).then((userData)=>{
        // console.log(userData)
        const hbsData = userData.toJSON();
        console.log(hbsData)
        res.render("profile", {
            User:hbsData
        })
    })
})

router.get("/post/:id",(req,res)=>{
    Post.findByPk(req.params.id,{
     include:[User]
    }).then((postData)=>{
     const hbsPosts = postData.toJSON();
    //  console.log(postData)
     console.log(hbsPosts)
     
   res.render("post", hbsPosts)
    })
 })
 


module.exports=router