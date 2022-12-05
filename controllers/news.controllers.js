const { client, ObjectId } = require("../mongodb/mongodb");
const newsTickerDatabase = client.db("kinsust").collection("newsTicker");

/**
 * @desc get all news data
 * @name GET /api/v1/news-ticker
 * @access public
 */

const newsTicker = async (req, res) => {
  const query = {};
  const cursor = newsTickerDatabase.find(query);
  const result = await cursor.toArray();
  res.send(result);
};

/**
 * @desc new news add
 * @name GET /api/v1/news-ticker
 * @access public
 */

const createNews = async (req, res) => {
  const data = req.body;
  const result = await newsTickerDatabase.insertOne(data);
  res.send(result);
};

/**
 * @desc get news
 * @name GET /api/v1/news-ticker
 * @access public
 */

const singleNews = async (req, res) => {
  const userId = req.params.id;
  const query = { _id: ObjectId(userId) };
  const result = await newsTickerDatabase.findOne(query);
  res.send(result);
};

/**
 * @desc delete newsTicker
 * @name delete /api/v1/news-ticker
 * @access public
 */
const deleteNews = async (req, res) => {
  const singleNews = req.params.id;
  const query = { _id: ObjectId(singleNews) };
  const result = await newsTickerDatabase.deleteOne(query);
  res.send(result);
};


//export controllers

module.exports = {
  newsTicker,
  createNews,
  deleteNews,
  singleNews,
};
