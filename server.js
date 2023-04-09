const express = require('express');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static content from public folder
app.use(express.static('public'));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));