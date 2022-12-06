const express = require("express");
const app = express();
const port = process.env.PORT || 5002;
const cors = require("cors");
const path = require("path");
const sliderRoutes = require("./routes/slider");
const postRoutes = require("./routes/post");
const programRoutes = require("./routes/program");
const newsRoutes = require("./routes/newsTicker");
//middleware
app.use(express.json());
app.use(cors());

async function run() {
  try {
    // slider routes
    app.use("/", sliderRoutes);
    // post routes
    app.use("/", postRoutes);
    // program routes
    app.use("/", programRoutes);
    // news routes
    app.use("/", newsRoutes);
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("KIN API running successfully");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
