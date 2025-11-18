const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');
const authMiddleware = require('../middleware/auth');

// Route to create a new listing
router.post('/', authMiddleware, listingsController.createListing);

// Route to get all listings
router.get('/', listingsController.getAllListings);

// Route to get a single listing by ID
router.get('/:id', listingsController.getListingById);

// Route to update a listing by ID
router.put('/:id', authMiddleware, listingsController.updateListing);

// Route to delete a listing by ID
router.delete('/:id', authMiddleware, listingsController.deleteListing);

module.exports = router;