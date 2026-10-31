const db = require("./db");

async function insertBooks() {
    try {
        const database = await db;

        const books = [
            ["Atomic Habits", "James Clear", 450, 320],
            ["The Alchemist", "Paulo Coelho", 300, 208],
            ["Rich Dad Poor Dad", "Robert Kiyosaki", 400, 336],
            ["Ikigai", "Hector Garcia", 350, 194],
            ["The Psychology of Money", "Morgan Housel", 399, 256],
            ["Deep Work", "Cal Newport", 450, 296],
            ["Think and Grow Rich", "Napoleon Hill", 299, 238],
            ["The Power of Habit", "Charles Duhigg", 420, 371],
            ["Zero to One", "Peter Thiel", 350, 224],
            ["Wings of Fire", "A.P.J. Abdul Kalam", 250, 180]
        ];

        for (const book of books) {
            await database.run(
                `INSERT INTO book (title, author, price, pages)
                 VALUES (?, ?, ?, ?)`,
                book
            );
        }

        console.log("10 books inserted successfully!");
        await database.close();

    } catch (error) {
        console.log(error.message);
    }
}

insertBooks();