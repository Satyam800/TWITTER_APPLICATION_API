import video from "../models/video.js";

export const insert=async(req,res)=>{
    console.log(req.body.video);
    video=req.body.video
    const admit= await video.insert(video)

}