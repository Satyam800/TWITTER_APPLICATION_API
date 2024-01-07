import { LikeRepository, TweetRepository } from '../repository/index.js'

class LikeService {
    constructor(Like) {
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
    }

    async toggleLike(modelId, modelTitle, userId) {
        //api/v1/like/toggle?id=modelid&type=tweet
        if (modelType == 'Tweet') {
            var likeable = await this.tweetRepository.get(modelId)
        } else if (modelType == 'Comment') {
        } else {
            throw new Error('unknown model type  ')
        }

        const exists = await this.likeRepository.findByUserAndLikeavle({
            user: userId,
            onModel: moderType,
            likeable: modelId,
        })
        if (exists) {
            likeable.likes.pull(exists.id)
            await likeable.save()
            await exists.remove()
            var isAdded = false
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: moderType,
                likeable: modelId,
            })
            likeable.likes.push(newLike)
            await likeable.save()

            var isAdded = true
        }

        return isRemoved
    }
}

export default LikeService
