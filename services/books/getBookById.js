import bookData from "../../data/books.json" assert { type: "json" };

const getBookById = (id) => {
  const book = bookData.books.find((book) => book.id === id);
  return book;
};

export default getBookById;
