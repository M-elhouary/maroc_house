import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get('/api/auth/me', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data.user);
            } catch (err) {
                setError(err.response.data.message);
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return { user, loading, error, login, logout };
};

export default useAuth;