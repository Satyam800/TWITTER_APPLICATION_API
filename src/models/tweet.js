import mongoose from "mongoose"

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet can not more than 250 character']
    },
    
    
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetSchema)
export default Tweet