const { client, ObjectId } = require("../mongodb/mongodb");
const programDatabase = client.db("kinsust").collection("program");

/**
 * @desc get all programs data
 * @name GET /api/v1/program
 * @access public
 */

const allProgram = async (req, res) => {
  const query = {};
  const programs = programDatabase.find(query);
  const result = await programs.toArray();
  res.send(result);
};

/**
 * @desc new program add
 * @name GET /api/v1/program
 * @access public
 */

const createProgram = async (req, res) => {
  const data = req.body;
  const result = await programDatabase.insertOne(data);
  res.send(result);
};

/**
 * @desc get program post
 * @name GET /api/v1/program
 * @access public
 */

const singleProgram = async (req, res) => {
  const userId = req.params.id;
  const query = { _id: ObjectId(userId) };
  const result = await programDatabase.findOne(query);
  res.send(result);
};

/**
 * @desc delete single program
 * @name DELETE /api/v1/program
 * @access public
 */

const deleteProgram = async (req, res) => {
  const singleProgram = req.params.id;
  const query = { _id: ObjectId(singleProgram) };
  const result = await programDatabase.deleteOne(query);
  res.send(result);
};

//export controllers

module.exports = {
  allProgram,
  createProgram,
  singleProgram,
  deleteProgram,
};
