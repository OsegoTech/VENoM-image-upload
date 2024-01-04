import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
  },
  { timestamps: true }
);

const Post = model("Post", PostSchema);

export default Post;
