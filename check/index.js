import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/gRoutes.js";
import adRouter from "./routes/adRoutes.js";


const app = express()

app.use(cors())
app.use(express.json())

// app.post("/api/echo", (req, res) => {
//   console.log("Echo body ->", req.body);
//   res.status(201).json({ ok: true, received: req.body });
// });




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listen ${PORT}`));

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("mon is connected")
})

// app.use((req, res, next)=>{
//     console.log(`${req.method} ${req.orginalUrl}`)
//     next()
// })
app.use("/api", router)
app.use('/ad', adRouter)


