import bookData from "../../data/books.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createBook = (title, author, isbn, pages, available, genre) => {
  const newBook = {
    id: uuid(),
    title,
    author,
    isbn,
    pages,
    available,
    genre,
  };

  try {
    bookData.books.push(newBook);
  } catch (error) {
    console.log("Error creating book");
    console.log(error);
  }

  return newBook;
};

export default createBook;
