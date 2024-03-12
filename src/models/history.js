import mongoose from "mongoose";


const historySchema=new mongoose.Schema({
    videoId:[
        {
            type:String,
            unique:true
        }
    ],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{
    timestamps:true
})

const history= mongoose.model("History",historySchema)
export default history