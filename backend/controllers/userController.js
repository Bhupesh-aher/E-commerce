import userModel from "../models/userModel.js"
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async(req, res) =>  {
    try{
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: 'User does not exists'})
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(isPasswordMatch){
            const token = createToken(user._id);
            res.json({success:true, token})
        }
        else{
            res.json({success:false, message: 'Invalid Credentials'})
        }

    }
    catch(err){
        console.log(err);
        res.json({success:false, message: err.message})
    }
}


// Route for user register
const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body
        
        // checking user already present or not
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message: 'User already exists'})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: 'Please enter a valid email'})
        }
        if(!validator.isStrongPassword(password)){
            return res.json({success: false, message: 'Please enter a strong password'})
        }

        
        // hashing password
        const hashPassword = await bcrypt.hash(password, 10)

        const user = new userModel({
            name,
            email,
            password: hashPassword
        })

        const savedUser = await user.save();

        const token = createToken(savedUser._id)

        res.json({success:true, token})



    }
    catch(err){
        console.log(err);
        res.json({success:false, message: err.message})
        
    }
}


// Route for admim panel
const adminLogin = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        }
        else{
            res.json({success:false, message: "Invalid Credentials"})
        }

    }

    catch(err){
        console.log(err);
        res.json({success:false, message: err.message})
    }
}

export {loginUser, registerUser, adminLogin}