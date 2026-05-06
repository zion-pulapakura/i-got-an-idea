import express from "express";
import generateProjectController from "../controllers/generateProjectController";
import explainProjectController from "../controllers/explainProjectController";
const router = express.Router();

router.post("/proj", generateProjectController);
router.post("/explain", explainProjectController);

export default router;
