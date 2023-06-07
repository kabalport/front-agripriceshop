// src/components/layouts/AdminLayout.tsx

import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import AdminHeader from './AdminHeader';
import AdminDashboardPage from '../../pages/AdminDashboardPage';
import AdminLoginPage from '../../pages/AdminLoginPage';
import AdminRegisterPage from '../../pages/AdminRegisterPage';
import AdminSidebar from '../adminLayout/AdminSideBar';
import UserHeader from "../userLayout/UserHeader";
import UserNavbar from "../userLayout/UserNavbar";
import MainPage from "../../pages/MainPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProductPage from "../../pages/ProductPage";
import ProductDetailPage from "../../pages/ProductDetailPage";
import CommunityPage from "../../pages/CommunityPage";
import NewPostPage from "../../pages/NewPostPage";
import PriceSearchPage from "../../pages/PriceSearchPage";
import MyPage from "../../pages/MyPage";
import LogoutPage from "../../pages/LogoutPage";
import UserFooter from "../userLayout/UserFooter";
import {CartProvider} from "../../../contexts/CartContext";

const AdminLayout: React.FC = () => {
    return (
        <CartProvider>
            <div>
                {location.pathname !== '/register' && location.pathname !== '/login' && <UserHeader />}
                {location.pathname !== '/register' && location.pathname !== '/login' && <UserNavbar />}
                <AdminSidebar/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/community/new-post" element={<NewPostPage />} />  {/* New route */}
                    <Route path="/price-search" element={<PriceSearchPage />} />
                    <Route path="/my-page" element={<MyPage />} />
                    <Route path="/logout" element={<LogoutPage />} />
                </Routes>
                {location.pathname !== '/register' && location.pathname !== '/login' && <UserFooter />}
                <Outlet />
            </div>
        </CartProvider>
    );
};

export default AdminLayout;
