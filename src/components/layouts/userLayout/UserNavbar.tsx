// src/components/common/UserNavbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/register">회원가입</Link></li>
                <li><Link to="/products">상품</Link></li>
                <li><Link to="/community">커뮤니티</Link></li>
                <li><Link to="/my-page">마이페이지</Link></li>
            </ul>
        </nav>
    );
};

export default UserNavbar;
