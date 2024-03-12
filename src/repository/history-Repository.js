import history from '../models/history.js'
import UserRepository from './user-repository.js'
const userRepository = new UserRepository()
class historyRepository {
    constructor() {}
    async Create(data) {
        try {
            const id = data.userId
            const user = await userRepository.findBy({ _id: id })

            if (!user) {
                return res.status(400).json({
                    message: 'Invalid user',
                })
            }

            console.log(user, 'user')
            const video = await history.findOne({ userId: user })

            console.log(video, 'video')
            if (!video) {
                const watchhistory = await history.create({
                    videoId: data.videoId,
                    userId: data.userId,
                })
                console.log(watchhistory, 'log')
            }

            const ispresent = video?.videoId.filter((i) => {
                if (i == data.videoId) {
                    return true
                }
                else {
                    return false
                }
            })
             console.log(ispresent,"ispresent");
            if (ispresent?.length == 0) {
                video.videoId.push(data.videoId)
            }
            await video.save()

            console.log(video?.videoId, 'list')
        } catch (error) {
            console.log(error, 'createError')
        }
    }

    async getAllhistory(data) {
        const historyList = await history.findOne({ userId: data.userId })

        console.log(historyList, 'getall history')
        return historyList
    }
}

export default historyRepository
