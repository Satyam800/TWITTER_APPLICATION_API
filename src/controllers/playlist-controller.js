import playlistService from "../services/playlist-service.js";

const playlistservice= new playlistService()

export const createPlaylist= async(req,res)=>{


 const playlist= await playlistservice.create({
    name:req.body.name,
    videoId:req.body.videoId,
    userId:req.body.userId
 })
 console.log(playlist,"controllerPlaylist");
}


export const fetchPlaylist= async(req,res)=>{
  const list= await playlistservice.getAll({
      userId:req.body.userId
   })
   console.log(list,"controllerplay");

   res.status(200).json({
      success:true,
      message:"list of Playlist",
      data:list
   })
}