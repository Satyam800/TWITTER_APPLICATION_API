const mongoose= require('mongoose')

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet can not more than 250 character']
    },
    userEmail:{
        type:String
    },
    Comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    },
    hashtags:[{
               type:mongoose.Schema.Types.ObjectId,
               ref:'Hashtags'
    }]
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetSchema)
module.exports=Tweet