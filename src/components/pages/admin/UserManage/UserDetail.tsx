import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button, Container} from "@mui/material";
//... your imports

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

const UserDetail: React.FC = () => {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the user from the API based on the id from the URL
        // setUser(fetchedUser);
    }, [id]);

    const handleDelete = () => {
        // Here you would make an API call to delete the user
        // After deleting the user navigate back to the user manage page
        navigate('/admin/user-manage');
    };

    const handleEdit = () => {
        // Here you would make an API call to update the user
    };

    if (!user) return <div>Loading...</div>;

    return (
        <Container>
            <h1>사용자 상세 정보</h1>
            {/* Show your user details */}
            <Button variant="outlined" onClick={handleEdit}>Edit</Button>
            <Button variant="outlined" onClick={handleDelete}>Delete</Button>
        </Container>
    );
};

export default UserDetail;
