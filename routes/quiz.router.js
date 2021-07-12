const express = require("express");
const router = express.Router();
const { Quiz } = require("../model/quiz.model")

router.route("/")
.get(async (req, res) => {
  try {
    const quizes = await Quiz.find({});
  res.send(quizes)
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to get quiz", errorMessage: err.message })
  }
  
})

module.exports = router