import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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

const AdminManage: React.FC = () => {
    const navigate = useNavigate();
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        axios.get(`/api/members/index`)
            .then((response) => {
                setAdmins(response.data);
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`);
                setError(`Error fetching data: ${error}`);
            });
    }, []);

    return (
        <Container>
            <h1>관리자 관리</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/admin/register')}>관리자 등록</Button>
            {error && <p>{error}</p>}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Login ID</TableCell>
                            <TableCell>User Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Detail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admins.map((admin: Admin) => (
                            <TableRow key={admin.id}>
                                <TableCell>{admin.id}</TableCell>
                                <TableCell>{admin.loginId}</TableCell>
                                <TableCell>{admin.userName}</TableCell>
                                <TableCell>{admin.email}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => navigate(`/admin/admin-manage/${admin.id}`)}>Detail</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AdminManage;
