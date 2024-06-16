import express from "express";
import cors from "cors";
import http from "http";
import dotenv from 'dotenv';
import issueRoutes from "./routes/issues.js";

dotenv.config();
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: [process.env.ORIGIN],
  })
);

app.use(express.json());

//All routes related to issues
app.use('/issue', issueRoutes)

server.listen(port, () => console.log("Listening on port 3001"));