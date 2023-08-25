import express from "express";
import { config } from "dotenv";
import cors from "cors";
import fileRoutes from "./routes/files.js";
import showRoutes from "./routes/show.js";
import downloadRoutes from "./routes/download.js";
import sendRoutes from "./routes/send.js";
export const app = express();

config({
  path: "./data/config.env",
});
//using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// Using routes
app.use("/api/v1", fileRoutes); // route to handle file upload
app.use("/api/v1", showRoutes); // route to show file details and providing download link
app.use("/api/v1", downloadRoutes); // route to download file
app.use("/api/v1", sendRoutes); // route to send mail
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});
