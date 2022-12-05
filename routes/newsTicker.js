const express = require("express");
const router = express.Router();
const {
  newsTicker,
  createNews,
  deleteNews,
  singleNews
} = require("../controllers/news.controllers");

// all post data routes
router.get("/api/v1/news-ticker", newsTicker);

//create single post routes
router.post("/api/v1/news-ticker", createNews);


// slider delete
router.delete("/api/v1/news-ticker/:id", deleteNews);


//single news

router.get("/api/v1/news-ticker/:id", singleNews); 


//export routes
module.exports = router;
