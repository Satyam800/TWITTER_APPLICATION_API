const jwt = require('jsonwebtoken')
import dotenv from "dotenv"
import user from '../models/user.js';
dotenv.config()
const secretKey=process.env.SECRET_KEY
const requireLogin = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: "You must be first logged in" });
      }
      const token = authorization.replace("Bearer ", "")
      jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
          console.log(err)
          return res.status(401).json({ message: "You must be logged in" })
        }
  
        user.findById(payload._id)
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(401)
              .json({ message: "You must be first logged in" });
          });
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "You must be first logged in" });
    }
  }
  export default requireLogin
  