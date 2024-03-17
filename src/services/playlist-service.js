import { createPlaylist } from "../controllers/playlist-controller.js";
import { playlistRepository } from "../repository/index.js";
const playlistRepo= new playlistRepository()
class playlistService{
constructor(){

}
 async create(data){
    try {
        const createlist=await  playlistRepo.createNewPlaylist(data)
        console.log(createlist,"createPlaylist");
        return createlist
    } catch (error) {
        console.log(error);
    }
 }

 async getAll(data){
    try {
        const getAllList=await playlistRepo.getAllPlaylist(data)
        return getAllList
    } catch (error) {
        
    }
 }
    
}

export default playlistService