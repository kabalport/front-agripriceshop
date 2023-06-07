import React, { useState } from 'react';
import { Container, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Admin {
    loginId: string;
    pw: string;
    userName: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
}

const AdminRegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState<Admin>({
        loginId: "",
        pw: "",
        userName: "",
        birthdate: "",
        gender: "",
        tel: "",
        addr: "",
        email: "",
    });

    const handleSubmit = () => {
        // Call API to register a new admin with the form data
        // If successful, navigate back to admin list
        navigate('/admin');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Container>
            <h1>관리자 등록</h1>
            <form noValidate autoComplete="off">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField label="Login ID" name="loginId" value={admin.loginId} onChange={handleChange} />
                    <TextField label="Password" name="pw" value={admin.pw} onChange={handleChange} type="password"/>
                    <TextField label="Username" name="userName" value={admin.userName} onChange={handleChange} />
                    <TextField label="Birthdate" name="birthdate" value={admin.birthdate} onChange={handleChange} type="date"/>
                    <TextField label="Gender" name="gender" value={admin.gender} onChange={handleChange} />
                    <TextField label="Phone Number" name="tel" value={admin.tel} onChange={handleChange} />
                    <TextField label="Address" name="addr" value={admin.addr} onChange={handleChange} />
                    <TextField label="Email" name="email" value={admin.email} onChange={handleChange} />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>등록</Button>
                </Box>
            </form>
        </Container>
    );
};

export default AdminRegisterPage;
