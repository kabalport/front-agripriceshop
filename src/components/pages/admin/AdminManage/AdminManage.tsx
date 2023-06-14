import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface Admin {
    id: number;
    loginId: string;
    pw: string;
    username: string;
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
        axios.get(`http://localhost:8080/api/user/members/list`)
            .then((response) => {
                // Check if response.data.content is an array
                if (Array.isArray(response.data.content)) {
                    setAdmins(response.data.content);
                } else {
                    console.error(`Unexpected server response: ${JSON.stringify(response.data)}`);
                    setError(`Unexpected server response.`);
                }
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`);
                setError(`Error fetching data: ${error}`);
            });
    }, []);


    return (
        <Container>
            <h1>회원 관리</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/admin/register')}>회원 등록</Button>
            {error ? (
                <p>{error}</p>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>아이디</TableCell>
                                <TableCell>이름</TableCell>
                                <TableCell>이메일</TableCell>
                                <TableCell>상세</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {admins.length > 0 ? (
                                admins.map((admin: Admin) => (
                                    <TableRow key={admin.id}>
                                        <TableCell>{admin.id}</TableCell>
                                        <TableCell>{admin.loginId}</TableCell>
                                        <TableCell>{admin.username}</TableCell>
                                        <TableCell>{admin.email}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => navigate(`/admin/admin-manage/${admin.loginId}`)}>상세보기</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5}>No admins found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

export default AdminManage;
