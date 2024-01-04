const express = require("express");
const connect=require('./src/config/database')
let app = express();
let PORT = 2500;
app.listen(PORT,  async () => {
  console.log("server started");
   connect()
  console.log("hello");
});


