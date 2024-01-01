const createTable = (db) => {
	const sql = `CREATE TABLE restaurants(id INTEGER PRIMARY KEY, name, description, image, price, quality)`;
	db.run(sql);
};

module.exports = { createTable };