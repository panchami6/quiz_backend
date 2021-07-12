const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const { initializeDBConnection } = require("./db/db.connect.js")
const quizes = require("./routes/quiz.router.js")

const app = express();
app.use(cors());

const PORT = 3000;

// called before any route handler
initializeDBConnection();

app.use("/quiz", quizes);

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});


app.use((req, res) => {
  res.status(404).json({ success: false, message: "route not found on server, please check"})
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message})
})

app.listen(PORT, () => {
  console.log('server started');
});