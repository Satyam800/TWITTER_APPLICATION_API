import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js'
class TweetRepository extends CrudRepository {
    constructor(Tweet) {
        super(Tweet)
    }

    async create(data) {
        try {
            const tweet = await Tweet.create(data)
            return tweet
        } catch (err) {
            console.log(err)
        }
    }

    async find(id) {
        try {
            const tweet = await Tweet.findById(id) //exex return a promise  mongo query is thenable

            console.log(tweet, 'tweet')
            return tweet
        } catch (err) {
            console.log(err)
        }
    }
    async getwithComment(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'likes' })
            return tweet
        } catch (err) {
            console.log(err)
        }
    }

    async getAllTweet() {
        try {
        } catch (err) {}
    }
}
export default TweetRepository
