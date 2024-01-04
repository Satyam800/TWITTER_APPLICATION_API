const {TweetRepository}= require('../repository/index')
class TweetService{
constructor(){
    this.TweetRepository=new TweetRepository()
}
   
     async create(data){ //data-> inside data it might be userid and all details of users
        const content=data.content
        const withtags=content.match(/(#[A-Za-z]*)/g)  //this regex extract the hashtags
        const tags= withtags.map((tag)=>tag.substring(1))
        console.log(tags)
        const tweet= this.TweetRepository.create(data)

        return tweet

     }

}

module.exports = TweetService