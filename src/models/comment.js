import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: {
        type: String
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    onModel:{
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    commentable:{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel',
        required: true
    },
    comments:[{
            
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    
}]
})

const comment = mongoose.model('Comment', commentSchema)
export default comment
