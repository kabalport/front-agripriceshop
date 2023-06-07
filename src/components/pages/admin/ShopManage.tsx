import React, { useEffect, useState } from 'react';
import {
    Container,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    TextField
} from "@mui/material";
import { Link } from "react-router-dom";
import { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";


interface Product {
    itemId: number;
    name: string;
    desc: string;
    price: number;
    stockQuantity: number;
    category: string;
    loginId: string;
    viewCount: number;
    orderCount: number;
}

const ShopManage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState("ALL");
    const [searchName, setSearchName] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;

                if (category === 'ALL') {
                    response = await axios.get('/api/items');
                } else {
                    response = await axios.get(`/api/items/category?category=${category}`);
                }

                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
                // You could show an error message to users here
            }
        };

        fetchData();
    }, [category]);

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    }

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/items/findname?name=${searchName}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
            // You could show an error message to users here
        }
    };


    return (
        <Container>
            <h1>상품 관리</h1>
            <Link to="/admin/shop/create">
                <Button variant="contained" color="primary">상품 추가</Button>
            </Link>
            <Select value={category} onChange={handleCategoryChange}>
                <MenuItem value={"ALL"}>All</MenuItem>
                <MenuItem value={"VEGETABLE"}>Vegetable</MenuItem>
                <MenuItem value={"FRUIT"}>Fruit</MenuItem>
                <MenuItem value={"FOODSTUFF"}>Foodstuff</MenuItem>
            </Select>
            <TextField value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Search by Name"/>
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>아이템 ID</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>설명</TableCell>
                            <TableCell>가격</TableCell>
                            <TableCell>재고 수량</TableCell>
                            <TableCell>카테고리</TableCell>
                            <TableCell>등록자 ID</TableCell>
                            <TableCell>조회 수</TableCell>
                            <TableCell>주문 수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.itemId}>
                                <TableCell>{product.itemId}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.desc}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.stockQuantity}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.loginId}</TableCell>
                                <TableCell>{product.viewCount}</TableCell>
                                <TableCell>{product.orderCount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ShopManage;
