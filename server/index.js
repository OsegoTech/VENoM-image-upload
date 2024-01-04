import express from "express"
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/database.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

import postRoutes from "./routes/PostRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const port  = process.env.PORT || 8000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/api/posts", postRoutes);

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});