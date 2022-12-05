const express = require("express");
const router = express.Router();
const {
  allProgram,
  createProgram,
  singleProgram,
  deleteProgram,
} = require("../controllers/program.controllers");

// all program data routes
router.get("/api/v1/program", allProgram);

//create single program routes
router.post("/api/v1/program", createProgram);

//single program routes
router.get("/api/v1/program/:id", singleProgram);

// single program delete
router.delete("/api/v1/program/:id", deleteProgram);

//export routes
module.exports = router;
