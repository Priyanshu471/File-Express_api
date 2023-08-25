import express from "express";
import handleShow from "../controllers/show.js";
const router = express.Router();

router.get("/show/:uuid", handleShow);
export default router;
