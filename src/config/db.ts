// const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
import mongoose from "mongoose"

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.aadqhfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('db connected')
        return dbConn
    } catch (error) {
        console.log(error)
    }
}

export default conn


