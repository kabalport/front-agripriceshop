// src/components/common/AdminNavbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/admin">대시보드</Link></li>
                <li><Link to="/admin/login">로그인</Link></li>
                <li><Link to="/admin/register">등록</Link></li>
                {/* Add more admin navigation links as needed */}
            </ul>
        </nav>
    );
};

export default AdminNavbar;
