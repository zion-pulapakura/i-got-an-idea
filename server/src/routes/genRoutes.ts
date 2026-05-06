import express from "express";
import generateProjectController from "../controllers/generateProjectController";
const router = express.Router();

router.post("/proj", generateProjectController);

export default router;
