import express from "express";
import handleUpload from "../controllers/file.js";

const router = express.Router();

router.post("/files", handleUpload);

export default router;
