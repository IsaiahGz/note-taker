const express = require('express');
const path = require('path');
const { readDbJson } = require('./lib/utils');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static content from public folder
app.use(express.static('public'));

// GET /notes takes users to notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => {
	// Read db.json and return notes as JSON
	readDbJson((data) => {
		res.json(data);
	});
});

// Wildcard route, send 404 and return landing page
app.get('*', (req, res) => res.status(404).sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
