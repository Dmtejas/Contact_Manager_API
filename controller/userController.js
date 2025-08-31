const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//@desc Register the new user
//@route - POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All feilds mandatory")
    }
    const userAvailable = await User.findOne({email: email})
    if(userAvailable) {
        res.status(400)
        throw new Error("User already exist")
    } 

    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    const user = await User.create({username, email, password: hashedPassword})
    console.log(user)
    if(user) {
        res.status(200).json({Username: username, email: email})
    } else {
        res.status(400)
        throw new Error("Unable to create the user")
    }
    res.json({message: "Register the user"})
})

//@desc Log-in the existing user
//@route - POST /api/users/login
//@access - public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    if(!email && !password) {
        res.status(400)
        throw new Error("All feilds are mandatory")
    }
    const user = await User.findOne({email})
    if(!user) {
        res.status(400)
        throw new Error("User does not exist")
    }
    if(await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN, /*Expiration*/{expiresIn: "1m"})
        res.status(200).json({accessToken})
    } else {
        res.status(401)
        throw new Error("Password is not valid")
    }
    res.json({
        message: "log in the user"
    })
})

//@desc Get the current user
//@route - GET /api/users/current
//@access - private (Only accessible users must see this) 
const currentUser = asyncHandler(async(req, res) => {

    //We need to validate a token 

    res.json({
        message: "Current user"
    })
})

module.exports = { registerUser, loginUser, currentUser }
