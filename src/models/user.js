import mongoose from 'mongoose'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
},{timestamps:true})

userSchema.pre('save',function (next){
 const user=this
 const SALT=bcrypt.genSaltSync(9)
 const encryptedPassword=bcrypt.hashSync(user.password,SALT)
 user.password=encryptedPassword
 next()
})

userSchema.methods.comparedPassword=function compare(password){
    return bcrypt.compareSync(password,this.password)
}

userSchema.methods.genJWT= function generate(){
 return jwt.sign({id:this._id,email:this.email},process.env.SECRET_KEY,{
        expiresIn:'24h'
    })
}
const user = mongoose.model('User', userSchema)
export default user
