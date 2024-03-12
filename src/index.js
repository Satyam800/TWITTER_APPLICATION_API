import express from 'express'
import { connect } from './config/database.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import apiRoutes from './routes/index.js'
import cors from"cors"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', apiRoutes)
app.use(cookieParser());
connect()


app.listen(process.env.PORT, async () => {
    console.log('server started', process.env.PORT)

})
