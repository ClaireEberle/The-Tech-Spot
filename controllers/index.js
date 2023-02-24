const express = require('express');
const router = express.Router();

const frontEndRoutes = require("./frontendcontroller");
router.use("/", frontEndRoutes);

const userRoutes = require('./userController'); 
router.use("/api/users", userRoutes);

const postRoutes = require('./postController');
router.use("/api/posts", postRoutes);

// const commentRoute = require('./commentController');
// router.use("/api/comments", commentRoute);



module.exports = router;