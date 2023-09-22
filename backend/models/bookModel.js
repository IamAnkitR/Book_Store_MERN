import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        author: { type: String, required: true },
        publishYear: { type: Number, required: true },
    },
    {
        timeStamps: true,
    }
);

export const Book = mongoose.model("Book", bookSchema);
