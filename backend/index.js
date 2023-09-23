import express from "express";
import { PORT, MONGO_URL } from './config.js';
import mongoose from "mongoose";
import bookRoutes from "./routes/bookroutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", bookRoutes);
app.get("/", (req, res) => {
    return res.status(234).send("Welcome to Book Store");
})

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error connecting to MongoDB", error);
})