import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BoardRegister: React.FC = () => {
    const [boardTitle, setBoardTitle] = useState("");
    const [boardContent, setBoardContent] = useState("");
    const navigate = useNavigate();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBoardTitle(e.target.value);
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBoardContent(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/user/boards', { boardTitle, boardContent });
            console.log(response.data);
            setBoardTitle("");
            setBoardContent("");
            navigate('/admin/board/manage');  // Successfully registered, navigate back to manage page
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <h1>게시판 등록</h1>
            <TextField value={boardTitle} onChange={handleTitleChange} label="Title" variant="outlined" />
            <TextField value={boardContent} onChange={handleContentChange} label="Content" variant="outlined" />
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </Container>
    );
};

export default BoardRegister;
