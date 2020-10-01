// Bring in Dependencies
const express = require('express');
const mongoose = require('mongoose');

const routes = require("./routes");

// Initialize Express
const app = express();

// BodyParser Middleware//
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Atlas 
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log());

// Add routes, both API and view
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));