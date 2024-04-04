import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import UserRoute from "./api/routes/userRoutes.js";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server!" });
});

app.use(bodyParser.json({ limit: "30MB", extended: true })); //for Images
app.use(bodyParser.urlencoded({ limit: "30MB", extended: true })); //for Images


app.use(cors());

app.use("/auth", UserRoute);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    "mongodb+srv://asmamughal097:UZDynR7zE9b5qTYm@cluster0.jlpafag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(PORT, () => console.log(`Server Running at ${PORT}`)))
  .catch((err) => console.error("MongoDB connection error:", err));
