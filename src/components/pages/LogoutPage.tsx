// src/components/pages/LogoutPage.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove user data from local storage
        localStorage.removeItem('userName');
        localStorage.removeItem('sessionId');

        // Redirect to login page
        navigate('/');
    }, [navigate]);

    return null;  // This component doesn't render anything
};

export default LogoutPage;
