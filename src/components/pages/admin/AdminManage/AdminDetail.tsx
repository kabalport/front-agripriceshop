import React, { useState, useEffect } from 'react';
import {Container, Typography, Paper, TextField, Button, Dialog, DialogTitle, DialogActions, Grid} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

interface Admin {
    id: number;
    loginId: string;
    pw: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
    orders: any[];
    boards: any[];
    role: string;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    authorities: any[];
    username: string;
    password: string;
}

const AdminDetail: React.FC = () => {
    const { loginId } = useParams();
    const navigate = useNavigate();

    const [admin, setAdmin] = useState<Admin>({
        id: 1,
        loginId: "logintest1",
        pw: "4321",
        birthdate: "2023-05-27",
        gender: "남",
        tel: "010-4321-4321",
        addr: "전북 남원시 가방뜰길",
        email: "test2@gmail.com",
        orders: [],
        boards: [],
        role: "USER",
        enabled: true,
        accountNonExpired: true,
        accountNonLocked: true,
        credentialsNonExpired: true,
        authorities: [{authority: "USER"}],
        username: "logintest1",
        password: "1234"
    });

    const [loading, setLoading] = useState<boolean>(true);
    const [editing, setEditing] = useState<boolean>(false);
    const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/user/members/${loginId}`)
            .then((response) => {
                setAdmin(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage(`Error fetching data: ${error}`);
                setErrorModalOpen(true);
                setLoading(false);
            });
    }, [loginId]);

    const handleEdit = () => {
        setEditing(true);
    };
    const handleSave = () => {
        axios.put(`http://localhost:8080/api/user/members/${loginId}`, {
            ...admin
        })
            .then((response) => {
                setAdmin(response.data);
                setEditing(false);
                navigate(-1);  // 이전 페이지로 이동
            })
            .catch((error) => {
                setErrorMessage(`Error updating data: ${error}`);
                setErrorModalOpen(true);  // 에러 모달 표시
            });
    };

    // const handleSave = () => {
    //     axios.put(`http://localhost:8080/api/user/members/${loginId}`, {
    //         ...admin
    //     })
    //         .then((response) => {
    //             setAdmin(response.data);
    //             setEditing(false);
    //         })
    //         .catch((error) => {
    //             setErrorMessage(`Error updating data: ${error}`);
    //             setErrorModalOpen(true);
    //         });
    // };

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/api/admin/members/${loginId}`)
            .then(() => {
                navigate('/admin');
            })
            .catch((error) => {
                setErrorMessage(`Error deleting data: ${error}`);
                setErrorModalOpen(true);
            });
    };

    const handleCloseErrorModal = () => {
        setErrorModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>관리자 상세 정보</Typography>
            <Paper style={{ padding: '1rem' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="아이디" defaultValue={admin.loginId} disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="이름" defaultValue={admin.username} disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="이메일" defaultValue={admin.email} onChange={e => setAdmin({...admin, email: e.target.value})} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="생년월일" defaultValue={admin.birthdate} disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="성별" defaultValue={admin.gender} disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="전화번호" defaultValue={admin.tel} onChange={e => setAdmin({...admin, tel: e.target.value})} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="주소" defaultValue={admin.addr} onChange={e => setAdmin({...admin, addr: e.target.value})} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="권한" defaultValue={admin.role} disabled />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" color="primary" onClick={handleSave} fullWidth>수정</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" color="secondary" onClick={handleDelete} fullWidth>삭제</Button>
                    </Grid>
                </Grid>
            </Paper>


            <Dialog
                open={errorModalOpen}
                onClose={handleCloseErrorModal}
            >
                <DialogTitle>Error</DialogTitle>
                <div>{errorMessage}</div>
                <DialogActions>
                    <Button onClick={handleCloseErrorModal}>Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default AdminDetail;
