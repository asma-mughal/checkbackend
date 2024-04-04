// Import the Express module
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
// Create an Express application
const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    "mongodb+srv://asmamughal097:UZDynR7zE9b5qTYm@cluster0.jlpafag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(PORT, () => console.log(`Server Running at ${PORT}`)))
  .catch((err) => console.error("MongoDB connection error:", err));