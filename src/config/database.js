import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.MONGO_URL

console.log(process.env.MONGO_URL,"uri")
export const connect = () => {
    mongoose.connect(uri)
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB')
    })

    mongoose.connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err) 
    })
}
