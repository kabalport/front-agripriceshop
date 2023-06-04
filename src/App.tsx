// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from "./components/layouts/userLayout/UserLayout";
import AdminLayout from "./components/layouts/adminLayout/AdminLayout";
// Import other pages...

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin/*" element={<AdminLayout />} />
                <Route path="/*" element={<UserLayout />} />
            </Routes>
        </Router>
    );
};

export default App;
