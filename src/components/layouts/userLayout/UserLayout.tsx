// src/components/layouts/UserLayout.tsx

import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import MainPage from '../../pages/user/MainPage';
import LoginPage from '../../pages/user/LoginPage';
import RegisterPage from '../../pages/user/RegisterPage';
import UserHeader from "./UserHeader";
import ProductPage from "../../pages/user/ProductPage";
import ProductDetailPage from "../../pages/user/ProductDetailPage";
import CommunityPage from "../../pages/user/CommunityPage";
import MyPage from "../../pages/user/MyPage";
import UserNavbar from "./UserNavbar";
import LogoutPage from '../../pages/user/LogoutPage';
import UserFooter from "./UserFooter";
import {CartProvider} from "../../../contexts/CartContext";
import NewPostPage from "../../pages/user/NewPostPage";
import PriceSearchPage from "../../pages/user/PriceSearchPage";


// import other pages...

const UserLayout: React.FC = () => {
    const location = useLocation();

    return (
        <CartProvider>
        <div>
            {location.pathname !== '/register' && location.pathname !== '/login' && <UserHeader />}
            {location.pathname !== '/register' && location.pathname !== '/login' && <UserNavbar />}

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

export default UserLayout;
