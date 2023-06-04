// src/components/pages/RegisterPage.tsx

import React, { useState } from 'react';
import axios from 'axios';
import Button from '../common/Button';

const RegisterPage: React.FC = () => {
    const [loginId, setLoginId] = useState("");
    const [pw, setPw] = useState("");
    const [userName, setUserName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [tel, setTel] = useState("");
    const [addr, setAddr] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Construct the request body
        const requestBody = {
            loginId,
            pw,
            userName,
            birthdate,
            gender,
            tel,
            addr,
            email
        };

        // Send a POST request to the server
        try {
            const response = await axios.post("http://localhost:8080/api/members/join", requestBody);
            console.log(response.data);
            // Perform any additional operations after successful registration...
        } catch (error) {
            console.error(error);
            // Handle the error appropriately...
        }
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Login ID:
                    <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} required />
                </label>
                <label>
                    User Name:
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </label>
                <label>
                    Birthdate:
                    <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
                </label>
                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">--Select Gender--</option>
                        <option value="남">남</option>
                        <option value="여">여</option>
                    </select>
                </label>
                <label>
                    Tel:
                    <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} required />
                </label>
                <label>
                    Address:
                    <input type="text" value={addr} onChange={(e) => setAddr(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <Button label="Register" />
            </form>
        </div>
    );
};

export default RegisterPage;
