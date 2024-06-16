import express from "express";
import { addIssue, getIssues, updateIssue, deleteIssue } from "../controllers/issues.js";

const router = express.Router();

//READ
//Endpoint to Get all issues
router.get("/all", getIssues);

//POST
//The add issue endpoint
router.post('/', addIssue);

//UPDATE
//Update issue
router.put('/', updateIssue);

//DELETE
//delete issue using its id
router.delete('/:id', deleteIssue);

export default router;