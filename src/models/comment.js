import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
    },
})

const comment = mongoose.model('Comment', commentSchema)
export default comment
