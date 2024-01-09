import { TweetRepository, HashRepository } from '../repository/index.js'
class TweetService {
    constructor() {
        this.TweetRepository = new TweetRepository()
        this.HashRepository = new HashRepository()
    }

    async create(data) {
        const content = data.content
         console.log(content,"content");
        const withtags = content.match(/(#[A-Za-z]*)/g) //this regex extract the hashtags

        const tags = withtags?.map((tag) => tag.substring(1).toLowerCase())

        const tweet = await this.TweetRepository.create(data)

        let alreadypresenttags = await this.HashRepository.findByName(tags)
        alreadypresenttags = alreadypresenttags?.map((tags) => {
       
            return tags?.title
        })

        let newTags = tags.filter((tag) => {
            console.log(!alreadypresenttags.includes(tag))
            return !alreadypresenttags.includes(tag)
        })
      
        newTags = newTags.map((tag) => {
            return {
                title: tag,
                tweet: [tweet.id], // doubt in tweet.id
            }
        })



        const response = await this.HashRepository.bulkCreate(newTags)

        alreadypresenttags.forEach((tag) => {
            tag.tweet.push(tweet.id)
            tag.save()
        })
        return tweet
    }

    async get(tweetId){
        const tweet=await this.TweetRepository.getwithComment(tweetId)
        return tweet
    }
}

export default TweetService


