import express from "express";
import generateProjectController from "../controllers/generateProjectController";
import explainProjectController from "../controllers/explainProjectController";
import fetchLatestMediaController from "../controllers/fetchLatestMediaController";
const router = express.Router();

router.post("/proj", generateProjectController);
router.post("/explain", explainProjectController);
router.post("/media/latest", fetchLatestMediaController);

export default router;
