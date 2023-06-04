// src/components/common/UserNavbar.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Link, Typography} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Hidden } from '@mui/material';

const StyledAppBar = styled(AppBar)({


});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: '0',

    [theme.breakpoints.up('md')]: {
        padding: '0', // Add padding only for desktop view
    },
}));


const UserNavbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledAppBar position="static" color="default" elevation={0} sx={{padding: 0}}>
            <StyledToolbar sx={{padding: 0}}>
                <Hidden mdUp>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="navbar-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                <Menu
                    id="navbar-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>홈</MenuItem>
                    <MenuItem component={RouterLink} to="/login" onClick={handleMenuClose}>로그인</MenuItem>
                    <MenuItem component={RouterLink} to="/register" onClick={handleMenuClose}>회원가입</MenuItem>
                    <MenuItem component={RouterLink} to="/products" onClick={handleMenuClose}>상품</MenuItem>
                    <MenuItem component={RouterLink} to="/community" onClick={handleMenuClose}>커뮤니티</MenuItem>
                    <MenuItem component={RouterLink} to="/my-page" onClick={handleMenuClose}>마이페이지</MenuItem>
                </Menu>
                <Box paddingLeft='15px'>
                    <Link component={RouterLink} to="/" variant="h6" color="inherit" underline="none">
                        농산커
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                    <Typography
                        component={RouterLink}
                        to="/products"
                        variant="body1"
                        style={{ cursor: "pointer", color: "inherit", textDecoration: "none", marginLeft: "15px", marginRight: "15px", fontWeight:"bold" }}
                    >
                        농산물 가격검색
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to="/products"
                        variant="body1"
                        style={{ cursor: "pointer", color: "inherit", textDecoration: "none", marginLeft: "15px", marginRight: "15px", fontWeight:"bold" }}
                    >
                        상품
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to="/community"
                        variant="body1"
                        style={{ cursor: "pointer", color: "inherit", textDecoration: "none", marginLeft: "15px", marginRight: "15px", fontWeight:"bold" }}
                    >
                        커뮤니티
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to="/my-page"
                        variant="body1"
                        style={{ cursor: "pointer", color: "inherit", textDecoration: "none", marginLeft: "15px", marginRight: "15px", fontWeight:"bold" }}
                    >
                        마이페이지
                    </Typography>
                </Box>


                <IconButton style={{ padding: 0 }}>
                    <Box style={{ backgroundColor: '#0080fe', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SearchIcon style={{ color: '#FFFFFF', width: '30px', height: '30px' }} />
                    </Box>
                </IconButton>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default UserNavbar;
