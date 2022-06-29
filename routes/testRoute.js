const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ data: "HELLO WORLD PART MASTER" });
});
router.get("/test2", (req, res) => {
  res.send({ data: "I am sayan" });
});

module.exports = router;
