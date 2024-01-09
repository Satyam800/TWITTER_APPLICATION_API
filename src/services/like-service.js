import { LikeRepository, TweetRepository } from '../repository/index.js'
import Like from '../models/like.js'

class LikeService {
    constructor(){
    
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
    }
   
    async toggleLike(modelId, modelType, userId) {
        //api/v1/like/toggle?id=modelid&type=tweet
        if (modelType == 'Tweet') {
            var likeable = await this.tweetRepository.get(modelId)
        } else if (modelType == 'Comment') {
        } else {
            throw new Error('unknown model type ')
        }

        const exists = await this.likeRepository.findByUserAndLikeavle({
            onModel: modelType,
            likeable: modelId,
            user: userId,
        })
       
        if (exists) {
            likeable.likes.pull(exists.id)
            await likeable.save()
            await exists.remove()
            var isAdded = false
        } else {
           
            const newLike = await this.likeRepository.create({
                onModel: modelType,
                likeable: modelId,
                user: userId,
            })
            
            likeable.likes?.push(newLike)
            await likeable.save()

            var isAdded = true
        }

        return isAdded
    }
}

export default LikeService
