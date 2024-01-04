import express from "express";
import { createPost, upload } from "../controllers/PostController.js";
const router = express.Router();

router.route("/").post(upload.single("image"), createPost);

export default router;
