import { historyRepository } from "../repository/index.js"

class historyService{

constructor(){
this.HistoryRepository= new historyRepository()
}

async create(data){
try {

   const videoId= await this.HistoryRepository.Create(data)
   return videoId
    }
 catch (error) {
    console.log(error,"historyServiceError");
}

}

async getAll(data){
   try {
     const getList= await this.HistoryRepository.getAllhistory(data) 
     return getList
   } catch (error) {
      
   }
}

}

export default historyService