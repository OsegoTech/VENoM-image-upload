import Post from "../models/PostModel.js";
import expressAsyncHandler from "express-async-handler";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const createPost = expressAsyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const image = req.file.path;
  try {
    if (!title || !content || !image) {
      res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }
    const newPost = new Post({
      title,
      content,
      image,
    });

    const createdPost = await Post.create(newPost);
    return res.status(201).json({
      status: "success",
      message: "New post created successfully",
      post: createdPost,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

export { createPost, upload };
