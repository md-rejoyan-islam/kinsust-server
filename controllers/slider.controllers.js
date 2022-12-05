const { client, ObjectId } = require("../mongodb/mongodb");
const kinSlider = client.db("kinsust").collection("slider");

/**
 * @desc get all slider data
 * @name GET /api/v1/slider
 * @access public
 */

const getAllSlider = async (req, res) => {
  const query = {};
  const sliders = kinSlider.find(query);
  const slidersArray = await sliders.toArray();
  res.send(slidersArray);
};

/**
 * @desc get all slider data
 * @name GET /api/v1/slider
 * @access public
 */

const singleSlider = async (req, res) => {
  const query = req.params.id;
  const slider = { _id: ObjectId(query) };
  const findData = kinSlider.find(slider);
  const result = await findData.toArray();
  res.send(result);
};

/**
 * @desc add slider
 * @name POST /api/v1/slider
 * @access public
 */

const addSlider = async (req, res) => {
  const slider = req.body;
  const result = await kinSlider.insertOne(slider);
  res.send(result);
};

/**
 * @desc delete slider
 * @name DELETE /api/v1/slider
 * @access public
 */

const deleteSlider = async (req, res) => {
  const singleSlider = req.params.id;
  const query = { _id: ObjectId(singleSlider) };
  const result = await kinSlider.deleteOne(query);
  res.send(result);
};

// export slider
module.exports = {
  getAllSlider,
  singleSlider,
  addSlider,
  deleteSlider,
};
