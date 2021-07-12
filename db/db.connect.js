const mongoose = require("mongoose")

async function initializeDBConnection() {
  const CONNECT_DB = process.env['CONNECT_DB']
  try{
    mongoose.connect(CONNECT_DB,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true 
  })
  console.log("successfully connected to db");
  } catch(error){
    console.error("mongoose connection failed...", error)
  }
}

module.exports = { initializeDBConnection }
