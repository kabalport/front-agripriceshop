// src/components/pages/LoginPage.tsx

import React, { useState } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';  // 변경된 줄

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();  // 변경된 줄

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform login
    };

    const handleGoBack = () => {  // 이전 페이지로 이동하는 함수
        navigate(-1);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <Button label="Login" />
                <Button label="Go Back" onClick={handleGoBack} />  // 변경된 줄
            </form>
            {/* Other components... */}
        </div>
    );
};

export default LoginPage;
