import express from "express";
import handleSend from "../controllers/send.js";
const router = express.Router();

router.post("/send", handleSend);

export default router;
