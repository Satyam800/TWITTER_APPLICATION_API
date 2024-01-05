import mongoose from "mongoose"

const hashtagsSchema=new mongoose.Schema({
    title:{
        type:String,
        req:true,
        unique:true
    },
    tweet:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tweet"
    }]
},{timestamps:true})

const Hashtags= mongoose.model("Hashtags",hashtagsSchema)
export default Hashtags