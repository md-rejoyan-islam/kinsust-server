const express = require("express");
const router = express.Router();
const {
  allPost,
  createPost,
  singlePost,
  deletePost
} = require("../controllers/post.controllers");

// all post data routes
router.get("/api/v1/post", allPost);

//create single post routes
router.post("/api/v1/post", createPost);

//single post routes
router.get("/api/v1/post/:id", singlePost);

// slider delete
router.delete("/api/v1/post/:id", deletePost);


//export routes
module.exports = router;
