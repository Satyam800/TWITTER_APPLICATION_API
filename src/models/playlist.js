import mongoose from 'mongoose'

const playlistSchema=new mongoose.Schema({
    videoId:[
        {
            type:"String"
        }
    ],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:"String",
         
    },
    
},{
    timestamps:true
})

const playlist= mongoose.model("Playlist",playlistSchema)
export default playlist