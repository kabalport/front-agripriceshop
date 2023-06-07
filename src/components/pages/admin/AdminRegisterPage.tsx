// src/components/pages/AdminRegisterPage.tsx

import React from 'react';
import Button from '../../common/Button';
import {Container} from "@mui/material";

const AdminRegisterPage: React.FC = () => {
    return (
        <Container>
            <h1>Admin Register Page</h1>
            <Button label="Register" />
            {/* Other components... */}
        </Container>
    );
};

export default AdminRegisterPage;
