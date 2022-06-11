const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");

class BooksController {
  add = asyncHandler(async (req, res) => {
    // throw new Error("Test помилки");
    if (!req.body.author) {
      res.status(400);
      throw new Error("Поле автор відсутнє");
    }

    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: "Ok",
      message: "create book",
      data: newBook,
    });
  });

  getAll = asyncHandler(async (req, res) => {
    const books = await Book.find({});
    res.status(200).json({
      status: "Ok",
      data: books,
      qty: books.length,
    });
  });

  getOne = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(400);
      throw new Error(`Відсутня книга з таким ${req.params.id} ID`);
    }

    res.status(200).json({
      status: "Ok",
      data: book,
    });
  });

  update = asyncHandler(async (req, res) => {
    res.send("upres.sent");
  });

  remove = asyncHandler(async (req, res) => {
    res.send("remove");
  });
}

module.exports = new BooksController();
