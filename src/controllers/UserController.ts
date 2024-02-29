import User from "../models/User";
import { Request, Response } from "express";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// generate user tolken
const generateToken = (id: any) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: '7d'
    })
}

// register user and sign in
const register = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    //check if user exists
    const user = await User.findOne({email})
    if(user){
        res.status(422).json({
            errors: ['Please use another email']
        })
        return
    }
    // generate password bash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // create user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // if user was created sucessfully
    if(!newUser){
        res.status(422).json({
            errors: ['Error, please try again later']
        })
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })

}

const login = async (req: Request, res: Response) => {
    res.send("Login")
}

module.exports = {
    register,
    login
}
