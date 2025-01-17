import express from "express";
import getBooks from "../services/books/getBooks.js";
import getBookById from "../services/books/getBookById.js";
import createBook from "../services/books/createBook.js";
import updateBookById from "../services/books/updateBookById.js";
import deleteBook from "../services/books/deleteBook.js";
// import authMiddleware from "../middleware/auth.js";
import authMiddleware from "../middleware/advancedAuth.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

// create a router instance
const booksRouter = express.Router();

booksRouter.get("/", (req, res) => {
  try {
    const { genre, available } = req.query;
    const books = getBooks(genre, available);
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting list of books!");
  }
});

booksRouter.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const book = getBookById(id);
    res.status(200).json(book);
  },
  notFoundErrorHandler
);

booksRouter.post("/", authMiddleware, (req, res) => {
  try {
    const { title, author, isbn, pages, available, genre } = req.body;
    const newBook = createBook(title, author, isbn, pages, available, genre);
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while creating new book!");
  }
});

booksRouter.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { title, author, isbn, pages, available, genre } = req.body;
    const updatedBook = updateBookById(
      id,
      title,
      author,
      isbn,
      pages,
      available,
      genre
    );
    res.status(200).json(updatedBook);
  },
  notFoundErrorHandler
);

booksRouter.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deletedBookId = deleteBook(id);

    res.status(200).json({
      message: `Book with id ${deletedBookId} was deleted!`,
    });
  },
  notFoundErrorHandler
);

booksRouter.get("/about", (req, res) => {
  const html = "<h1>About Us</h1><p>Welcome to our website!</p>";
  res.send(html);
});

export default booksRouter;
