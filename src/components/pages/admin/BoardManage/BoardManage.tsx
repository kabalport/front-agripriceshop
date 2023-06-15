import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


interface Board {
    id: number;
    boardTitle: string;
    boardContent: string;
    regdate: string;
    viewCount: number;
}




const BoardManage: React.FC = () => {
    const navigate = useNavigate();  // 이동 함수 가져오기
    const [boardData, setBoardData] = useState<Board[]>([]);

    useEffect(() => {
        const fetchBoardData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/common/boards');
                setBoardData(response.data.content);
            } catch (error) {
                console.error('Failed to fetch board data', error);
            }
        };

        fetchBoardData();
    }, []);

    const BoardRegister = () => {
        navigate('/admin/board/register');  // 등록 페이지로 이동
    };

    return (
        <Container>
            <h1>게시판 관리</h1>
            <Button variant="contained" color="primary" onClick={BoardRegister}>등록</Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Content</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>View Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {boardData.map((board, index) => (
                            <TableRow key={index}>
                                <TableCell>{board.id}</TableCell>
                                <TableCell>{board.boardTitle}</TableCell>
                                <TableCell>{board.boardContent}</TableCell>
                                <TableCell>{board.regdate}</TableCell>
                                <TableCell>{board.viewCount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default BoardManage;
