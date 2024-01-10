import mongoose, { mongo } from 'mongoose'

const likeSchema = new mongoose.Schema(
    {
        onModel: {
            type: String,
            enum: ['Tweet', 'Comment'],
            require: true,
        },
        likeable: {
            //whether it is belonging to tweet or comment
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'onModel',
            required: true,
        },
        user: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
)

const Like = mongoose.model('Like', likeSchema)

export default Like
