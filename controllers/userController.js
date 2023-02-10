const express = require('express');
const router = express.Router();
const {User,Post} = require('../models');
const bcrypt = require("bcrypt");

router.get("/", (req,res) =>{
    User.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"something went wrong..", err})
    })
})

router.get("/:id", (req,res)=>{
    User.findByPk(req.params.id,{
        include:[Post]
}).then(userData=>{
    res.json(userData)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"something went wrong..", err})
})
})

router.post("/", (req,res)=>{
console.log(req.body);
    User.create({
        email:req.body.email,
        password:req.body.password
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"something went wrong.."})
    })
})

module.exports = router;