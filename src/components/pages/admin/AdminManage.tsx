import React from 'react';
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

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

    // Admin data (this should come from your backend)
    const admins: Admin[] = [
        {
            id: 1,
            loginId: "logintest1",
            pw: "1234",
            userName: "join1",
            birthdate: "2023-05-27",
            gender: "남",
            tel: "010-1234-1234",
            addr: "전북 남원시 가방뜰길",
            email: "test@gmail.com",
            orders: [],
            boards: []
        },
        // add more admins as needed
    ];

    return (
        <Container>
            <h1>관리자 관리</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/admin/register')}>관리자 등록</Button>
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
