// src/components/layouts/AdminLayout.tsx

import React from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminDashboardPage from "../../pages/AdminDashboardPage";
import AdminLoginPage from "../../pages/AdminLoginPage";
import AdminRegisterPage from "../../pages/AdminRegisterPage";
import AdminNavbar from "./AdminNavbar";


const AdminLayout: React.FC = () => {
    return (
        <div>
            <AdminHeader />
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashboardPage />} />
                <Route path="/login" element={<AdminLoginPage />} />
                <Route path="/register" element={<AdminRegisterPage />} />
            </Routes>
            <Outlet />
        </div>
    );
};
export default AdminLayout;
