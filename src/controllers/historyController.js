import historyService from "../services/history-service.js";

const historyservice= new historyService()

export const createhistory=async(req,res)=>{

    try {
        const videoId= await historyservice.create({
            videoId:req.body.videoId,
            userId: req.body.userId
        })
         console.log(videoId,"cont")
         return res.status(200).json({
            success:true,
            message:"Added in your history",
            data:videoId
         })

    


    } catch (error) {
        return res.json({
            success:false

        })
    }

}

export const getHistory=async(req,res)=>{


    const getList=await historyservice.getAll({
        videoId:req.body.videoId,
        userId: req.body.userId
     })
     console.log(getList,"getList");

     return res.status(200).json({
        success:true,
        message:"watch history",
        data:getList
     })

}