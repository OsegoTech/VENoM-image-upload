import express from "express";
import { createPost, upload, getPosts } from "../controllers/PostController.js";
const router = express.Router();

router.route("/").post(upload.single("image"), createPost).get(getPosts);

export default router;
