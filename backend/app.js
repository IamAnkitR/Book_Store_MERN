import express from 'express';
import { Book } from './models/bookModel.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/books", async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.description || !req.body.publishYear) {
            res.status(400).send("Please provide all required fields");
            return;
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log("Error creating book", error);
    }
})

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            "count": books.length,
            "books": books,
        });
    } catch (error) {
        console.log("Error getting books", error);
    }
})

app.get("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json({
            "book": book,
        });
    } catch (error) {
        console.log("Error getting books", error);
    }
})

export default app;