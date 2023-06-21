import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'


//@desc => logging in existing user
//@route => POST /api/users/login
//@access => public

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && await user.matchPassword(password)) {
        res.status(200).json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            phone_number: user.phone_number,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})


//@desc => register new user
//@route => POST /api/users
//@access =>public
 
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password, phone_number} = req.body
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        username: username,
        email: email,
        password: password,
        phone_number: phone_number,
    })
    if(user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            phone_number: user.phone_number,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid user credentials")
    }
})


export {
    authUser,
    registerUser
}