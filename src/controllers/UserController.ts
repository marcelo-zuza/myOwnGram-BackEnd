import User from "../models/User";
import { Request, Response } from "express";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// generate user tolken
const generateToken = (id: string) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: '7d'
    })
}

// register user and sign in
const register = async (req: Request, res: Response) => {
    res.send("Registro")
}

export default {
    register
}
