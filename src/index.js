import express from "express"
import {connect} from "./config/database.js"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import apiRoutes from "./routes/index.js"
dotenv.config()
const app=express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/api',apiRoutes)

connect()

let PORT = 2500;
app.listen(PORT,  async () => {
  console.log("server started",PORT);
  
  
});


