const express = require("express");
const bodyParser = require("body-parser");
const url = require("url");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database(
  "./restaurants.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) console.error(err);
  }
);

let sql = "";

const app = express();

app.use(bodyParser.json());

app.post("/restaurants", (req, res) => {
  try {
    const { name, description, image, price, quality } = req.body;
    sql = `INSERT INTO restaurants(name, description, image, price, quality) VALUES(?,?,?,?,?)`;
    db.run(sql, [name, description, image, price, quality], (err) => {
      if (err) return res.json({ status: 300, success: false, error: err });
    });
    console.log(req);
    return res.json({ status: 200, success: true });
  } catch (error) {
    return res.json({ status: 400, success: false });
  }
});

app.get("/restaurants", cors(), (req, res) => {
  try {
    sql = "SELECT * FROM restaurants";
    const queryObject = url.parse(req.url, true).query;
    if (queryObject.id) sql += ` WHERE id = ${queryObject.id}`;
    db.all(sql, [], (err, rows) => {
      if (err) return res.json({ status: 300, success: false, error: err });

      if (rows.length < 1)
        return res.json({ status: 300, success: false, error: "No match" });

      return res.json({ status: 200, data: rows, success: true });
    });
  } catch (error) {
    return res.json({ status: 400, success: false });
  }
});

app.listen(8002);
