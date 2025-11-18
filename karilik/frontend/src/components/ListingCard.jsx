import React from 'react';

const ListingCard = ({ listing }) => {
    return (
        <div className="listing-card">
            <img src={listing.image} alt={listing.title} className="listing-image" />
            <div className="listing-details">
                <h2 className="listing-title">{listing.title}</h2>
                <p className="listing-description">{listing.description}</p>
                <p className="listing-price">{listing.price} MAD</p>
                <button className="listing-button">View Details</button>
            </div>
        </div>
    );
};

export default ListingCard;