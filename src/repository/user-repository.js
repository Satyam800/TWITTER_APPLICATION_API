import CrudRepository from './crud-repository.js'
import user from '../models/user.js'

class UserRepository extends CrudRepository{
    constructor(){
        super(user)
    }
    
    async findBy(data){
        try {
           const response = await user.findOne(data)
           return response 
        } catch (error) {
            throw error
        }
    }
}

export default  UserRepository