import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

//@desc Register a user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler (async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password: ", hashedPassword);
    
    res.json({message: "Register the user"});
});

//@desc Login user
//@route GET /api/users/login
//@access public
const loginUser = asyncHandler (async (req, res) => {
    res.json({message: "Login user"});
});

//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler (async (req, res) => {
    res.json({message: "Current user information"});
});


export { registerUser, loginUser, currentUser };
