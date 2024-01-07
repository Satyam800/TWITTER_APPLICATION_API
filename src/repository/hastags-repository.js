import Hashtags from '../models/hastags.js'

class HashRepository {
    async create(data) {
        try {
            const tag = await Hashtags.create(data)
            console.log(tag, 'tagggs')
            return tag
        } catch (err) {
            console.log(err)
        }
    }

    async get(data) {
        try {
        } catch (err) {}
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtags.insertMany(data)
            return tags
        } catch (err) {
            console.log(err)
        }
    }

    async delete() {
        try {
        } catch (err) {}
    }

    async findByName(titleList) {
        try {
            const tags = await Hashtags.find({
                title: titleList,
            })

            return tags
        } catch (err) {
            console.log(err)
        }
    }

    async getAllTweet() {
        try {
        } catch (err) {}
    }
}

export default HashRepository
