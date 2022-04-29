const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database(
  "./restaurants.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) console.error(err);
  }
);

const sql = `CREATE TABLE restaurants(id INTEGER PRIMARY KEY, name, description, image, price, quality)`;
db.run(sql);
