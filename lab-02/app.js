
const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

async function initializeDBAndServer() {
    try {
        const database = await db;

        await database.exec(`
            CREATE TABLE IF NOT EXISTS book (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                author TEXT NOT NULL,
                price INTEGER NOT NULL,
                pages INTEGER NOT NULL
            );
        `);

        // GET: All Books
        app.get("/books/", async (request, response) => {
            const books = await database.all("SELECT * FROM book");
            response.status(200).json(books);
        });

        // GET: Book by ID
        app.get("/books/:bookId/", async (request, response) => {
            const { bookId } = request.params;

            const book = await database.get(
                "SELECT * FROM book WHERE id = ?",
                [bookId]
            );

            if (!book) {
                return response.status(404).send("Book Not Found");
            }

            response.status(200).json(book);
        });

        // POST: Add a Book
        app.post("/books/", async (request, response) => {
            const { title, author, price, pages } = request.body;

            const result = await database.run(
                `INSERT INTO book (title, author, price, pages)
                 VALUES (?, ?, ?, ?)`,
                [title, author, price, pages]
            );

            response.status(201).json({
                message: "Book Added Successfully",
                bookId: result.lastID
            });
        });

        // PUT: Update a Book
        app.put("/books/:bookId/", async (request, response) => {
            const { bookId } = request.params;
            const { title, author, price, pages } = request.body;

            const result = await database.run(
                `UPDATE book
                 SET title = ?, author = ?, price = ?, pages = ?
                 WHERE id = ?`,
                [title, author, price, pages, bookId]
            );

            if (result.changes === 0) {
                return response.status(404).send("Book Not Found");
            }

            response.status(200).send("Book Updated Successfully");
        });

        // DELETE: Remove a Book
        app.delete("/books/:bookId/", async (request, response) => {
            const { bookId } = request.params;

            const result = await database.run(
                "DELETE FROM book WHERE id = ?",
                [bookId]
            );

            if (result.changes === 0) {
                return response.status(404).send("Book Not Found");
            }

            response.status(200).send("Book Deleted Successfully");
        });

        // Start Server
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.log(`Database Error: ${error.message}`);
        process.exit(1);
    }
}

initializeDBAndServer();

module.exports = app;

