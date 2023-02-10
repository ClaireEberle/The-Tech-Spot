const express = require('express');
const router = express.Router();
const {User,Post} = require('../models');

router.get("/", (req,res)=>{
    Post.findAll({
        include:[User]
    }).then(postData=>{
        console.log(postData)
        const hbsPosts = postData.map(posts.toJSON())
        res.render("home", {
            allPosts:postData
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
    res.render("profile")
})

module.exports=router