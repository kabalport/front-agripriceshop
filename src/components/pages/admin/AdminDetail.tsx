import React, { useState } from 'react';
import {Container, Typography, Paper, TextField, Button} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

interface Admin {
    id: number;
    loginId: string;
    pw: string;
    userName: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
    orders: any[];
    boards: any[];
}

const AdminDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Replace this with API call to get the admin detail based on the id
    const adminData: Admin = {
        id: 1,
        loginId: "logintest1",
        pw: "4321",
        userName: "join1",
        birthdate: "2023-05-27",
        gender: "남",
        tel: "010-4321-4321",
        addr: "전북 남원시 가방뜰길",
        email: "test2@gmail.com",
        orders: [],
        boards: []
    };

    const [admin, setAdmin] = useState<Admin>(adminData);
    const [editing, setEditing] = useState<boolean>(false);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        // Call API to update admin details here
        setEditing(false);
    };

    const handleDelete = () => {
        // Call API to delete admin here
        // If successful, navigate back to admin list
        navigate('/admin');
    };

    return (
        <Container>
            <h1>관리자 상세 정보</h1>
            <Paper style={{ padding: '1rem' }}>
                {editing ? (
                    <>
                        <TextField label="Login ID" defaultValue={admin.loginId} onChange={e => setAdmin({...admin, loginId: e.target.value})} />
                        <TextField label="Username" defaultValue={admin.userName} onChange={e => setAdmin({...admin, userName: e.target.value})} />
                        <TextField label="Email" defaultValue={admin.email} onChange={e => setAdmin({...admin, email: e.target.value})} />
                        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6">ID: {admin.id}</Typography>
                        <Typography variant="h6">Login ID: {admin.loginId}</Typography>
                        <Typography variant="h6">Username: {admin.userName}</Typography>
                        <Typography variant="h6">Email: {admin.email}</Typography>
                        <Button variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default AdminDetail;
