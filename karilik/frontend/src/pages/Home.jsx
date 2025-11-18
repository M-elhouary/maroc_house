import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Karilik</h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/listings">View Listings</Link>
                </nav>
            </header>
            <main className="home-main">
                <section className="hero">
                    <h2>Your Moroccan Rental Marketplace</h2>
                    <p>Find the perfect place to stay in Morocco.</p>
                    <Link to="/listings" className="btn">Browse Listings</Link>
                </section>
                <section className="features">
                    <h3>Features</h3>
                    <ul>
                        <li>Wide range of properties</li>
                        <li>Easy booking process</li>
                        <li>Secure payments</li>
                        <li>24/7 customer support</li>
                    </ul>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; 2023 Karilik. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;