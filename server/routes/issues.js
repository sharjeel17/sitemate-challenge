import express from "express";
import { addIssue, getIssues } from "../controllers/issues.js";

const router = express.Router();

//READ
//Endpoint to Get all issues
router.get("/all", getIssues);

//POST
//The add issue endpoint
router.post('/', addIssue);

export default router;