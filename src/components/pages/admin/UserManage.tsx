import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box } from '@mui/material';

interface User {
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

const users: User[] = [
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
        boards: [],
    },
    // Add more users as needed
];

const UserManage: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleOpen = (user: User) => {
        setSelectedUser(user);
    };

    const handleClose = () => {
        setSelectedUser(null);
    };

    return (
        <Container>
            <h1>사용자 관리</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Login ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Birthdate</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.loginId}</TableCell>
                                <TableCell>{user.userName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.tel}</TableCell>
                                <TableCell>{user.addr}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>{user.birthdate}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" onClick={() => handleOpen(user)}>Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={selectedUser !== null}
                onClose={handleClose}
            >
                <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', outline: 'none' }}>
                    {selectedUser && (
                        <div>
                            <h2>{selectedUser.userName}'s Details</h2>
                            <p>ID: {selectedUser.id}</p>
                            <p>Login ID: {selectedUser.loginId}</p>
                            <p>Name: {selectedUser.userName}</p>
                            <p>Email: {selectedUser.email}</p>
                            <p>Phone: {selectedUser.tel}</p>
                            <p>Address: {selectedUser.addr}</p>
                            <p>Gender: {selectedUser.gender}</p>
                            <p>Birthdate: {selectedUser.birthdate}</p>
                        </div>
                    )}
                </Box>
            </Modal>
        </Container>
    );
};

export default UserManage;
