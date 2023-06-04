// src/components/common/UserNavbar.tsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Link } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)({
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
});

const UserNavbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledAppBar position="static" color="default" elevation={0}>
            <StyledToolbar>
                <Link component={RouterLink} to="/" variant="h6" color="inherit" underline="none">
                    농산커
                </Link>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="navbar-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
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
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Button component={RouterLink} to="/products" variant="text">상품</Button>
                    <Button component={RouterLink} to="/community" variant="text">커뮤니티</Button>
                    <Button component={RouterLink} to="/my-page" variant="text">마이페이지</Button>
                </Box>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default UserNavbar;
