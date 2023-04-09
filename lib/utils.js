const fs = require('fs');
const path = require('path');

// Reads db.json and passes json data to callback function
const readDbJson = (cb) => {
	fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
		if (err) console.log(err);
		else cb(JSON.parse(data));
	});
};

module.exports = { readDbJson };
