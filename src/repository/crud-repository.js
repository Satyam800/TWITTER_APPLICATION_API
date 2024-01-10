class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
           
           
            const result = await this.model.create(data)
            
            return result
        } catch (err) {
            console.log('Something went wrong',err)
         
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id)
            return result
        } catch (err) {
            console.log('Something went wrong')
            throw err
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id)
            return result
        } catch (err) {
            console.log('Something went wrongs')
            throw err
        }
    }
    async getAll() {
        try {
            const result = await this.model.find({})
            return result
        } catch (err) {
            console.log('Something went wrong')
            throw err
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {
                new: true,
            }) // new:true because update return old document not updated one
            return result
        } catch (err) {
            console.log('Something went wrongs')
            throw err
        }
    }
}

export default CrudRepository
