require('dotenv').config()
import express from "express";
import path from 'path';
const cors = require("cors");
//router
import router from "./routes/Router";
//db

const conn = require('./config/db')

const port = process.env.PORT
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// solve Cors
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// Uploads folder
app.use("/uploads", express.static(path.join(__dirname, '../public')))
//db connections

// routes
app.use(router)

app.listen(port, () => {
    console.log(`\nServer listening on port http://localhost:${port}\n`);
})