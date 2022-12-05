const express = require("express");
const router = express.Router();
const {
  getAllSlider,
  singleSlider,
  addSlider,
  deleteSlider,
} = require("../controllers/slider.controllers");

// All slider data
router.get("/api/v1/slider", getAllSlider);

// Single slider find
router.get("/api/v1/slider/:id", singleSlider);

// slider add
router.post("/api/v1/slider", addSlider);

// slider delete
router.delete("/api/v1/slider/:id", deleteSlider);

//export router
module.exports = router;
