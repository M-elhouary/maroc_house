const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = parseInt(process.env.PORT, 10) || 5000;

// Helper to try to start the server on a port, with simple retries when the port is busy.
function startServerWithRetry(port, attemptsLeft = 5) {
    const server = app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    server.on('error', (err) => {
        if (err && err.code === 'EADDRINUSE') {
            console.warn(`Port ${port} in use.`);
            if (attemptsLeft > 0) {
                const nextPort = port + 1;
                console.log(`Attempting to start on port ${nextPort} (${attemptsLeft - 1} retries left)...`);
                // give a short delay before retrying
                setTimeout(() => {
                    startServerWithRetry(nextPort, attemptsLeft - 1);
                }, 200);
                return;
            }
            console.error(`All retries exhausted. Port ${port} (and subsequent ports) are in use. Set PORT to an available port and restart.`);
            process.exit(1);
        }
        // Unexpected error while listening — rethrow so it surfaces
        throw err;
    });
}


//
// app.js is responsible for establishing the mongoose connection.
// Here we only listen for connection events so we don't call connect() twice.
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
    startServerWithRetry(PORT, /* attempts */ 5);
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});