const express = require("express");
const bodyParser = require("body-parser");
const url = require("url");
const cors = require("cors");
const sqlite = require("sqlite3").verbose();
const fs = require("fs");
const { createTable } = require("./table");
const env = require('dotenv').config().parsed

const PORT = env.BACKEND_PORT ?? 8002;
const dbPath = "./restaurants.db";
let dbExists = true;

if (!fs.existsSync(dbPath)) {
	fs.writeFileSync(dbPath, "");
	dbExists = false;
}

const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) => {
	if (err) console.error(err);
});

if (!dbExists) {
	createTable(db);
}

let sql = "";

const app = express();
console.log(`Start server on port ${PORT}`);

app.use(bodyParser.json({ limit: "50mb" }));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET,PUT,POST,DELETE,PATCH,OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, Content-Length, X-Requested-With"
	);
	if (req.method === "OPTIONS") {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.post("/restaurants/add", (req, res) => {
	try {
		const { name, description, image, price, quality } = req.body;
		sql = `INSERT INTO restaurants(name, description, image, price, quality) VALUES(?,?,?,?,?)`;
		db.run(sql, [name, description, image, price, quality], (err) => {
			if (err) return res.json({ status: 300, success: false, error: err });
		});
		console.log(`INSERT ${name} restaurant`);
		return res.json({ status: 200, success: true });
	} catch (error) {
		console.error(error);
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

app.put("/restaurants/edit/:id", cors(), (req, res) => {
	try {
		const id = +req.params.id;
		const { name, description, image, price, quality } = req.body;
		sql = `UPDATE restaurants SET name=?, description=?, image=?, price=?, quality=? WHERE id=?`;
		db.run(sql, [name, description, image, price, quality, id], (err) => {
			if (err) return res.json({ status: 300, success: false, error: err });
		});
		console.log(`UPDATE ${name} restaurant`);
		return res.json({ status: 200, success: true });
	} catch (error) {
		console.error(error);
		return res.json({ status: 400, success: false });
	}
});

app.delete("/restaurants/delete/:id", cors(), (req, res) => {
	try {
		const id = +req.params.id;
		sql = `DELETE FROM restaurants WHERE id=?`;
		db.run(sql, id, (err) => {
			if (err) return res.json({ status: 300, success: false, error: err });
		});
		console.log(`DELETE ${id} restaurant`);
		return res.json({ status: 200, success: true });
	} catch (error) {
		console.error(error);
		return res.json({ status: 400, success: false });
	}
});

app.listen(PORT);
