const Hashtags = require('../models/hastags')


class HashRepository{

    async create(){
     try{

     }
     catch(err){
                
     }
    }

    async get(data){
try{

     }
     catch(err){
                
     }
    }

    async bulkCreate(data){
        try{
        const tags= await Hashtags.insertMany(data)
             }
             catch(err){
                console.log(err)
             }
            }

    async delete(){
        try{

        }
        catch(err){
                
        }
    }

    async getwithComment(){
        try{

        }
        catch(err){
                
        }
    }

    async getAllTweet(){
        try{

        }
        catch(err){
                
        }
    }

}

module.exports=HashRepository