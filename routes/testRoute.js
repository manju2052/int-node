const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ data: "HELLO WORLD PART " });
});

module.exports = router;
