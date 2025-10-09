import { Router } from "express";
import Signup from "../controllers/SignupController.js"

const adRouter = Router()

adRouter.post("/signup", Signup)


export default adRouter