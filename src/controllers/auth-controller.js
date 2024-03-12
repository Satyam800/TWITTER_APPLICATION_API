import UserService from "../services/user-service.js";
import cookieParser from "cookie-parser";
import nodemailer from 'nodemailer';
const userService= new UserService()
export const signup=async (req,res)=>{
try {
  
    const user= await userService.getUserByEmail(req.body.email)
  if(user){
    return res.status(401).json({
        message:"Already signed up"
    })
  }
    
    const response = await userService.signup({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
    })

   const token= response.genJWT()
   res.cookie("token",token, { httpOnly: true, maxAge: 900000 })
    return res.status(201).json({
        success:true,
        message:'succesfully create a new user',
        data:{
            response,
            token
        },
        err:{}
    })
} catch (error) {
    return res.status(500).json({
        success:false,
        message:"something went wrong",
        data:{},
        err:error
    })
}


}

export const login= async(req,res)=>{
    try {
        const user= await userService.getUserByEmail(req.body.email)
      
        if(!user){
            return res.status(401).json({
                message:"no user found",
                success:false
            })
        }
            if(!user.comparedPassword(req.body.password)){
                return res.status(401).json({
                    message:"incorrect password",
                    success:false
                }) 
            }
       
            const token=user.genJWT()
            res.cookie('token',token, { httpOnly: true })
            return res.status(200).json({
               success:true,
               message:"succesfully logged in",
               data:{
                user,
                token
               },
               err:{}
            })
        }
     catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error.message
         })
    }
}

export const ResetPassword=async(req,res)=>{
    try {
        const getUser= await userService.getUserByEmail(req.body.email)
        if(!getUser){
            return res.json({
                success:"false",
                message:"User not exist",
                data:{}
            })
        }

if(req.body.oldPass){
    const isvalidoldPass= await getUser.comparedPassword(req.body.oldPass)
 if(!isvalidoldPass){
    return res.json({
        success:false,
        message:"Incorrect Password"
    })
 }

 getUser.password=req.body.NewPass
  await getUser.save()
console.log(getUser,"getuser");

 return res.status(200).json({
    success:true,
    message:"succesfully updated old Password"
 })
}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Email,
    pass: process.env.EmailPassword
  },
  
});

var mailOptions = {
  from: process.env.Email,
  to: req.body.email,
  subject: 'Reset your password',
  text: 'OTP-Verification mail',
  html:` <h1>OTP_Verification Mail </h1> <p>Hi, <b>${getUser.name}</b> </p> <p>This is your reset password otp <b> ${req.body.otp}</b> </p>`
 
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    return res.send(({
        status:"success",
        otp:req.body.otp
    }))
   
  }

  

});
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error.message
         })
    }
}