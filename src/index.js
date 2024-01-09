import express from 'express'
import { connect } from './config/database.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import apiRoutes from './routes/index.js'
import {UserRepository} from './repository/index.js'
import {TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js'
dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

connect()

let PORT = 2500
app.listen(PORT, async () => {
    console.log('server started', PORT)

const userRepo= new UserRepository()
const tweetRepo= new TweetRepository()
const tweet=await tweetRepo.getAll(0,10)
 const user= await userRepo.create({
  email:"golmwaixxcl.com",
  password:"satyam@80",
  name:"satyam"
 })

   const likeService= new LikeService()
  await likeService.toggleLike(tweet[0].id,"Tweet",user.id)

})
