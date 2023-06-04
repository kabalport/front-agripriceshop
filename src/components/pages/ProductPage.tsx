import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Box, Card, CardContent, CardMedia, Typography, Button, Pagination, Container} from '@mui/material';
import { TextField, MenuItem, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {styled} from "@mui/system";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [cart, setCart] = useState<Product[]>([]); // Cart state
    const handleAddToCart = (product: Product) => {
        setCart([...cart, product]);
    };
    const [itemsPerPage, setItemsPerPage] = useState(5);


    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemsPerPage(parseInt(event.target.value));
    };


    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get<string[]>("https://fakestoreapi.com/products/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Failed to fetch categories data:", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
                const uniqueCategories = [...new Set(response.data.map((item) => item.category))];
                setProducts(response.data);
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleViewDetails = (productId: number) => {
        // Navigate to ProductDetailsPage
        navigate(`/products/${productId}`);
    };

    const filteredProducts = products.filter((product: any) =>
        (selectedCategory === "" || product.category === selectedCategory) &&
        (searchTerm === "" || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    function truncateText(text: string, limit: number): string {
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    }

    const ProductSectionContainer = styled(Container)({
        maxWidth: '1240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
    });

    return (
        <ProductSectionContainer>
        <Box
            display="flex"
            flexDirection="column"
            maxWidth= '1240px'
            justifyContent="center"
            alignItems="center"
            padding={1}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Products
            </Typography>
            <Box width="80%" display="flex" justifyContent="space-between" marginBottom="20px">
                <TextField
                    select
                    label="Category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    style={{width: 200}}
                >

                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <TextField
                    select
                    label="Items per Page"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    style={{width: 200}}
                >
                    <MenuItem value={5}>
                        5
                    </MenuItem>
                    <MenuItem value={10}>
                        10
                    </MenuItem>
                    <MenuItem value={15}>
                        15
                    </MenuItem>
                </TextField>
            </Box>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <Box
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {displayedProducts.map((product: Product, index: number) => (
                            <Card key={index} sx={{ maxWidth: 345, margin: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <CardMedia
                                    component="img"
                                    height="345"
                                    image={product.image}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {truncateText(product.title, 20)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {truncateText(product.description, 100)}
                                    </Typography>
                                    <Typography variant="h6">
                                        {product.price}원
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
                                    <Button variant="contained" color="primary" onClick={() => handleViewDetails(product.id)}>
                                        상세보기
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleAddToCart(product)}>
                                        장바구니
                                    </Button>
                                </Box>
                            </Card>
                        ))}

                    </Box>
                    <Pagination count={Math.ceil(filteredProducts.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
                </>
            )}
        </Box>
        </ProductSectionContainer>
    );
};

export default ProductPage;
