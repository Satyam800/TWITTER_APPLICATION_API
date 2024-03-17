import mongoose from "mongoose";

const videoSchema=new mongoose.Schema({
    videos:[
        {
            type:"String"
        }
    ]
})

const video= mongoose.model("video",videoSchema)
export default video