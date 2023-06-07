import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, List, ListItem, ListItemText, ListItemIcon, Collapse, IconButton, Drawer} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';

const AdminSidebar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    }

    return (
        <Box sx={{ width: '240px', flexShrink: 0, position: 'static' }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                sx={{ display: 'block' }}
            >
                <MenuIcon />
            </IconButton>

            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <GroupIcon /> {/* 아이콘 변경 */}
                    </ListItemIcon>
                    <ListItemText primary="회원관리" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/admin/user-manage">
                            <ListItemIcon>
                                <PersonIcon /> {/* 아이콘 변경 */}
                            </ListItemIcon>
                            <ListItemText primary="사용자 관리" />
                        </ListItem>
                        <ListItem button component={Link} to="/admin/admin-manage">
                            <ListItemIcon>
                                <AdminPanelSettingsIcon /> {/* 아이콘 변경 */}
                            </ListItemIcon>
                            <ListItemText primary="관리자 관리" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button component={Link} to="/admin/products">
                    <ListItemIcon>
                        <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText primary="상품관리" />
                </ListItem>
                <ListItem button component={Link} to="/admin/boards">
                    <ListItemIcon>
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText primary="게시판관리" />
                </ListItem>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="홈" />
                </ListItem>
            </List>
        </Box>
    );
};

export default AdminSidebar;
