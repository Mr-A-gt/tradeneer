const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
dbConnect();


app.use(express.static('public'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use('/', adminRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
