// src/components/common/AdminHeader.tsx

// src/components/layouts/AdminHeader.tsx

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AdminHeader: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Admin Panel
                </Typography>
                {/* Add your additional header content here */}
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;
