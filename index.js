const express = require("express");
const app = express();
const cors = require("cors");

const testRoute = require("./routes/testRoute");

app.use(cors());
app.use(testRoute);

app.listen(4000, () => {
  console.log("Server Run on PORT 4000");
});
