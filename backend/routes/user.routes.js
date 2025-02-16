import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:username", protectRoute, getUser);

export default router;
