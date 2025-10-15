import { Router } from "express";
import Signup from "../controllers/SignupController.js"
import Lo from "../controllers/LoControllers.js";

const adRouter = Router()

adRouter.post("/signup", Signup)
adRouter.post("/login", Lo)


export default adRouter