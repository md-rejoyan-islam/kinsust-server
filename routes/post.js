const express = require("express");
const router = express.Router();
const {
  allPost,
  createPost,
  singlePost,
  deletePost,
  updatePost,
} = require("../controllers/post.controllers");

// all post data routes
router.get("/api/v1/post", allPost);

//create single post routes
router.post("/api/v1/post", createPost);

//single post routes
router.get("/api/v1/post/:id", singlePost);

// post delete
router.delete("/api/v1/post/:id", deletePost);

// update post
router.put("/api/v1/post/:id", updatePost);

//export routes
module.exports = router;
