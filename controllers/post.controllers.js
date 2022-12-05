const { client, ObjectId } = require("../mongodb/mongodb");
const postDatabase = client.db("kinsust").collection("post");

/**
 * @desc get all post data
 * @name GET /api/v1/post
 * @access public
 */

const allPost = async (req, res) => {
  const query = {};
  const size = parseInt(req.query.size);
  const page = parseInt(req.query.page);
  const cursor = postDatabase.find(query);
  const result = await cursor.skip(size*page).limit(size).toArray();
  const count = await postDatabase.estimatedDocumentCount();
  res.send({count,result});
};

/**
 * @desc new post add
 * @name GET /api/v1/post
 * @access public
 */

const createPost = async (req, res) => {
  const user = req.body;
  const result = await postDatabase.insertOne(user);
  console.log(result);
  res.send(result);
};

/**
 * @desc get single post
 * @name GET /api/v1/post
 * @access public
 */

const singlePost = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const query = { _id: ObjectId(userId) };
  const user = await postDatabase.findOne(query);
  res.send(user);
};


/**
 * @desc delete slider
 * @name DELETE /api/v1/slider
 * @access public
 */

const deletePost = async (req, res) => {
  const singlePost = req.params.id;
  const query = { _id: ObjectId(singlePost) };
  const result = await postDatabase.deleteOne(query);
  res.send(result);
};



//export controllers

module.exports = {
  allPost,
  createPost,
  singlePost,
  deletePost
};
