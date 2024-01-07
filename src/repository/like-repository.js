import Like from '../models/like.js'

import CrudRepository from './crud-repository.js'
class LikeRepository extends CrudRepository {
    constructor() {
        super(Like)
    }

    async findByUserAndLikeavle(data) {
        try {
            const like = await Like.findOne(data)
        } catch (err) {
            throw err
        }
    }
}

export default LikeRepository
