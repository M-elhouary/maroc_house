const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const listingsRoutes = require('./routes/listings');
const { errorHandler } = require('./middleware/auth');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingsRoutes);

// Serve project-level assets (dev helper) - exposes karilik/background.png at /assets/background.png
app.get('/assets/background.png', (req, res) => {
    const file = path.join(__dirname, '..', '..', 'background.png');
    res.sendFile(file, err => {
        if (err) {
            console.error('Error sending background.png', err);
            res.status(404).send('Not found');
        }
    });
});

// Root route for quick health check / friendly message
app.get('/', (req, res) => {
    res.send('<h1>Karilik API</h1><p>Backend is running. Use <a href="/api/listings">/api/listings</a> or the frontend dev server.</p>');
});

// Error handling middleware
app.use(errorHandler);

// MongoDB connection
// prefer an explicit IPv4 host to avoid IPv6 (::1) connection issues when
// the local MongoDB service is not bound to IPv6. Allow overriding via MONGODB_URI.
const rawUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/karilik';
const uri = rawUri.replace('localhost', '127.0.0.1');

// establish connection (index.js listens for the 'connected' event and starts the server)
mongoose.connect(uri).catch(err => console.error('MongoDB connection error:', err));

// Export the app
module.exports = app;