import { UserRepository } from "../repository/index.js"

class UserService{
    constructor(){
        this.UserRepository=new UserRepository()
    }

    async signup(data){
     try {
        const user= await this.UserRepository.create(data)
        console.log(user,"oikl");
        return user
     } catch (error) {
        throw error
       
     }
    }

    async getUserByEmail(email){
        try {
            const user= await this.UserRepository.findBy({email})
            console.log(user,"user");
            return user
        } catch (error) {
            throw error
        }
    }
}
export default UserService