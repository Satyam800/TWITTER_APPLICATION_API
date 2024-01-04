const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    content:{
        type:String
    }
})

const comment= mongoose.model("Comment",commentSchema)
module.exports=comment