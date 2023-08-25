import express from "express";
import handleDownload from "../controllers/download.js";
const router = express.Router();
router.get("/download/:uuid", handleDownload);
export default router;
