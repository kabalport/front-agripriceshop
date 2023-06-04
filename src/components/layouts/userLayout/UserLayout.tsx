// src/components/layouts/UserLayout.tsx

import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import UserHeader from "./UserHeader";
import ProductPage from "../../pages/ProductPage";
import ProductDetailPage from "../../pages/ProductDetailPage";
import CommunityPage from "../../pages/CommunityPage";
import MyPage from "../../pages/MyPage";
import UserNavbar from "./UserNavbar";
// import other pages...

const UserLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== '/login' && <UserHeader />}
            {location.pathname !== '/login' && <UserNavbar />}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
            <Outlet />
        </div>
    );
};

export default UserLayout;
