import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();

// App Configuration
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())


export {app}