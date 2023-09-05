const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(morgan('combined')); // Logging HTTP requests
app.use(helmet()); // Improve application security with HTTP headers

// Routes
const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes); // User-related routes
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const sequelize = require('./config/db')
const User = require('./models/userModel')


sequelize
    .sync()
module.exports = app;