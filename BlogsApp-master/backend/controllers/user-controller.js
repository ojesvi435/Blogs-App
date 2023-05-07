import User from "../model/User";
import bcrypt from "bcryptjs";


export const getAllUser=async(req,res,next)=>{
    let users;
    try {
        users=await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"No Users Found!! Enter valid credidential"});
    }
    return res.status(200).json({users});
}


//creating signup request
export const signup=async(req,res,next)=>{
    const {name,email,password}=req.body;
    
    //adding validation if user exist
    let existingUser;
    try {
        existingUser=await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exist. Please Login Instead."})
    }

    //creating new user if user does'nt exist -> from User-model that is imported form User-Schema
    
    //creating encrypted password for the  password-string in cont user -> using bcrypt module
    const hashPassword=bcrypt.hashSync(password);
    
    const user=new User({
        name,
        email,
        password:hashPassword,
        blogs:[]
    });

    try {
        await user.save();    //saving the document: adding user
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({user})
}


//creating login route
export const login=async(req,res,next)=>{
    const {email,password}=req.body;
    
    //validating for existing user
    let existingUser;
    try {
        existingUser=await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"No User with the given Email . Please Signup Instead."})
    }

    //if user found the compare with the password in the database
    const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid Password for the given Email-ID. Please Try Again"})
    }
    return res.status(200).json({message:"Login Successfull",user:existingUser})
} 