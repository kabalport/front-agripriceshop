// src/components/pages/LoginPage.tsx

import React, { useState } from 'react';
import axios from 'axios';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [loginId, setLoginId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/login", { loginId, pw });
            console.log(response.data);

            // Save the username to localStorage
            localStorage.setItem("userName", response.data.userName);

            // Redirect to the home page
            navigate("/");
        } catch (error) {
            console.error(error);
            // Handle the error appropriately...
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Login ID:
                    <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required />
                </label>
                <Button label="Login" />
            </form>
            <Button label="Go Back" onClick={() => navigate(-1)} />
        </div>
    );
};

export default LoginPage;
