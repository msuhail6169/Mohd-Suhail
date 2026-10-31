const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const path = require("path");

const db = open({
    filename: path.join(__dirname, "bookStore.db"),
    driver: sqlite3.Database
});

module.exports = db;