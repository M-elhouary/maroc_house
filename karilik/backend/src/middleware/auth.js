const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

// Attach an error handler to the middleware function so it can be imported
// either via `const auth = require('./middleware/auth')` (returns function)
// or destructured like `const { errorHandler } = require('./middleware/auth')`.
authMiddleware.errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err && err.status ? err.status : 500;
    const message = err && err.message ? err.message : 'Internal Server Error';
    // If headers are already sent, delegate to default handler
    if (res.headersSent) return next(err);
    res.status(status).json({ message });
};

module.exports = authMiddleware;