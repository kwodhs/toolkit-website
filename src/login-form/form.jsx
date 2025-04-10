import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './database/users.json';
import './form.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            setError('');
            localStorage.setItem('user', JSON.stringify(user));
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                window.location.href = "/toolbox-main-screen";
                }, 5000);
        } else {
            setError('');
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setError('Неверный логин или пароль');
                }, 5000);
        }
    };

    return (
        <div className="center-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Welcome, again.</h1>
                <span className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </span>
                <span className="input-span">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </span>
                {error && <p style={{ color: 'red', margin: 0, fontStyle: 'italic' }}>{error}</p>}
                <input className="submit" type="submit" value="Log in" />
                {loading && (
                    <div class="loader">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                )}
            </form>
        </div>
    );
}

export default LoginForm;
