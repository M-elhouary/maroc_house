import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import './Login.css';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // Store user data and token (if applicable)
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            navigate('/'); // Redirect to homepage after successful login
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Login to Karilik</h1>
            {error && <p className="error">{error}</p>}
            <AuthForm onSubmit={handleLogin} />
        </div>
    );
};

export default Login;