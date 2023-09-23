import express from "express";
const router = express.Router();
import { Book } from "../models/bookModel.js";

//Route to get all the books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        console.log("Books");
        res.status(200).json({
            "count": books.length,
            "books": books,
        });
    } catch (error) {
        console.log("Error getting books", error);
    }
})

//Route to add a new book
router.post("/", async (req, res) => {
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

//Route to get a single book
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json({
            "book": book,
        });
    } catch (error) {
        console.log("Error getting book", error);
    }
})

//Route to update a book
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.description || !req.body.publishYear) {
            return res.status(400).send("Please provide all required fields");

        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body,);
        if (!result) {
            return res.status(404).send("Book not found");

        }
        return res.status(200).send("Book updated successfully");

    } catch (error) {
        console.log("Error updating book", error);
    }
})

//route to delete a book
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send("Book not found");
        }
        return res.status(200).send("Book deleted successfully");
    } catch (error) {
        console.log("Error deleting book", error);
    }

})

export default router;