// routes/gRoutes.js
import { Router } from "express";
import crBg from "../controllers/gController.js";
import { validateCreate } from "../middlewares/validateCreate.js";
import crGe from "../controllers/crGeController.js";
import crGi from "../controllers/crGiController.js";
import validateId from "../middlewares/validateId.js";

const router = Router();
router.post("/gp",validateCreate, crBg);
router.get("/ge", crGe)
router.get("/ge/:id",validateId, crGi)

export default router;
