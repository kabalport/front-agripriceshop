import React, { useState } from 'react';
import { Container, TextField, Button, Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface Admin {
    loginId: string;
    pw: string;
    userName: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
    role: "USER" | "ADMIN";
}

const AdminRegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState<Admin>({
        loginId: "test3",
        pw: "1234",
        userName: "test3",
        birthdate: new Date().toISOString().slice(0, 10), // 오늘 날짜로 설정
        gender: "여",
        tel: "010-1234-1234",
        addr: "주소",
        email: "123@naver.com",
        role: "USER"
    });

    const handleSubmit = async () => {
        try {
            // API 호출하여 새로운 관리자 등록
            const response = await axios.post("http://localhost:8080/api/common/auth/signup", admin);
            const newAdmin = response.data;
            console.log(admin)
            // 등록이 성공적으로 이루어지면 관리자 목록 페이지로 이동
            navigate('/admin');
        } catch (error) {
            // 오류 처리
            console.error(error);
        }
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
                    <TextField label="아이디" name="loginId" value={admin.loginId} onChange={handleChange} />
                    <TextField label="비밀번호" name="pw" value={admin.pw} onChange={handleChange} type="password"/>
                    <TextField label="이름" name="userName" value={admin.userName} onChange={handleChange} />
                    <TextField label="생년월일" name="birthdate" value={admin.birthdate} onChange={handleChange} type="date" defaultValue={admin.birthdate} />
                    <TextField
                        label="성별"
                        name="gender"
                        select
                        value={admin.gender}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value=""></option>
                        <option value="남">남성</option>
                        <option value="여">여성</option>
                    </TextField>
                    <TextField label="휴대폰번호" name="tel" value={admin.tel} onChange={handleChange} />
                    <TextField label="주소" name="addr" value={admin.addr} onChange={handleChange} />
                    <TextField label="이메일" name="email" value={admin.email} onChange={handleChange} />
                    <TextField
                        label="역할"
                        name="role"
                        select
                        value={admin.role}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </TextField>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>등록</Button>
                </Box>
            </form>
        </Container>
    );
};

export default AdminRegisterPage;
