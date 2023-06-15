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
import BoardManage from '../../pages/admin/BoardManage/BoardManage';
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

import AdminSideBar from './AdminSideBar';
import NotFound from "../../pages/NotFound";
import BoardRegister from "../../pages/admin/BoardManage/BoardRegister";

const Content = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));



function AdminLayout() {

    return (
        <Box sx={{ display: 'flex' }}>
            <AdminSideBar />
            <Content sx={{margin: 0, padding: 0}}>
                <AdminHeader/>

                {/* your main content here */}
                <Routes>
                    {/*<Route path="/" element={<AdminDashboardPage />} />*/}
                    <Route path="/" element={<AdminManage />} />
                    <Route path="/members" element={<AdminManage />} />
                    <Route path="/login" element={<AdminLoginPage />} />
                    <Route path="/logout" element={<AdminLogoutPage />} />
                    <Route path="/user-manage" element={<UserManage />} />
                    <Route path="/products" element={<ShopManage />} />
                    <Route path="/boards" element={<BoardManage />} />
                    <Route path="/board/register" element={<BoardRegister />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                    <Route path="/admin-manage/:loginId" element={<AdminDetail />} />
                    <Route path="/register" element={<AdminRegisterPage />} />
                    <Route path="/shop/create" element={<ProductCreate />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Content>
        </Box>
    );
}

export default AdminLayout;
