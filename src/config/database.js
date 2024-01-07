import mongoose from 'mongoose'
import config from '../../config.js'
const uri = config.MONGO_URL

export const connect = () => {
    mongoose.connect(uri)

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB')
    })

    mongoose.connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err)
    })
}
