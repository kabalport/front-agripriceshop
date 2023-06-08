import React from 'react';
import { styled } from '@mui/system';
import {Drawer, Toolbar, Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import MessageIcon from '@mui/icons-material/Message';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Import your components here
import AdminDashboardPage from '../../pages/admin/AdminDashboardPage';
import UserManage from '../../pages/admin/UserManage/UserManage';
import AdminManage from '../../pages/admin/AdminManage/AdminManage';
import ShopManage from '../../pages/admin/ItemManage/ShopManage';
import BoardManage from '../../pages/admin/BoardManage';
import AdminHeader from "./AdminHeader";
import AdminLoginPage from "../../pages/admin/AdminLoginLogout/AdminLoginPage";
import UserDetail from "../../pages/admin/UserManage/UserDetail";
import AdminDetail from "../../pages/admin/AdminManage/AdminDetail";
import AdminRegisterPage from "../../pages/admin/AdminManage/AdminRegisterPage";
import ProductCreate from "../../pages/admin/ItemManage/ProductCreate";
import AdminLogoutPage from "../../pages/admin/AdminLoginLogout/AdminLogoutPage";

const drawerWidth = 240;

const DrawerWrapper = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
}));

const Content = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));




function AdminLayout() {

    return (
        <Box sx={{ display: 'flex' }}>
            {/*<AdminHeader />*/}
            <Hidden smDown>
            <DrawerWrapper
                variant="permanent"
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar><Typography>농산커</Typography></Toolbar>

                {/* your drawer content here */}
                <List>
                    <ListItem button component={Link} to="/admin/">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="대시보드" />
                    </ListItem>
                    <ListItem button component={Link} to="/admin/user-manage">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="사용자 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/admin/admin-manage">
                        <ListItemIcon>
                            <AdminIcon />
                        </ListItemIcon>
                        <ListItemText primary="관리자 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/admin/products">
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="상품 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/admin/boards">
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="게시판 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="사용자 홈" />
                    </ListItem>
                </List>
            </DrawerWrapper>
            </Hidden>
            <Content sx={{margin: 0, padding: 0}}>
                <AdminHeader/>

                {/* your main content here */}
                <Routes>
                    <Route path="/" element={<AdminDashboardPage />} />
                    <Route path="/login" element={<AdminLoginPage />} />
                    <Route path="/logout" element={<AdminLogoutPage />} />
                    <Route path="/user-manage" element={<UserManage />} />
                    <Route path="/admin-manage" element={<AdminManage />} />
                    <Route path="/products" element={<ShopManage />} />
                    <Route path="/boards" element={<BoardManage />} />
                    <Route path="/user-manage/:id" element={<UserDetail />} />
                    <Route path="/admin-manage/:id" element={<AdminDetail />} />
                    <Route path="/register" element={<AdminRegisterPage />} />
                    <Route path="/shop/create" element={<ProductCreate />} />
                </Routes>
            </Content>
        </Box>
    );
}

export default AdminLayout;
