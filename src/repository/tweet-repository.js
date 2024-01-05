import Tweet from '../models/tweet.js'
class TweetRepository{

    async create(data){
     try{
       const tweet= await Tweet.create(data)
    
       console.log(tweet, "tweet")
       return tweet
     }
     catch(err){
          console.log(err);      
     }
    }

    async get(){
try{

     }
     catch(err){
                
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
export default TweetRepository