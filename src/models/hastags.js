const mongoose=require('mongoose')

const hashtagsSchema=new mongoose.Schema({
    title:{
        type:String,
        req:true
    },
    tweet:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tweet"
    }]
},{timestamps:true})

const Hashtags= mongoose.model("Hashtags",hashtagsSchema)
module.exports=Hashtags