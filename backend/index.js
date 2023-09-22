import express from "express";
import { PORT, MONGO_URL } from './config.js';
import mongoose from "mongoose";
import bookRoutes from "./routes/bookroutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to Book Store");
})

app.use("/books", bookRoutes);


mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error connecting to MongoDB", error);
})