const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Reads db.json and passes json data to callback function
const readDbJson = (cb) => {
	fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
		if (err) console.log(err);
		else cb(JSON.parse(data));
	});
};

// Take a note object to add to db and a callback which passes the newly created note with id
const createNote = (noteData, cb) => {
	// Add id to noteData
	noteData.id = uuidv4();
	readDbJson((currentJsonDb) => {
		// Append new note to db data
		currentJsonDb.push(noteData);
		fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(currentJsonDb, null, 4), (err) => {
			if (err) console.log(err);
			else cb(noteData);
		});
	});
};

module.exports = { readDbJson, createNote };
