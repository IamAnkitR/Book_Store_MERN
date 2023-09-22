import express from "express";
import app from "./app.js";
import { PORT } from './config.js';
import { MONGO_URL } from './config.js';
import mongoose from "mongoose";

app.use(express.json());


mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error connecting to MongoDB", error);
})