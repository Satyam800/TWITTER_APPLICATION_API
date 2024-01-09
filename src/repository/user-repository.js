import CrudRepository from './crud-repository.js'
import user from '../models/user.js'

class UserRepository extends CrudRepository{
    constructor(){
        super(user)
    }
}

export default  UserRepository