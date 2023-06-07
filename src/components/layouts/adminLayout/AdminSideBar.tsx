// src/components/layouts/AdminSidebar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const AdminSidebar: React.FC = () => {
    return (
        <div>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/login">
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/register">
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                </ListItem>
            </List>
        </div>
    );
};

export default AdminSidebar;
