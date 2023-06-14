import { styled } from '@mui/system';
import {Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import MessageIcon from '@mui/icons-material/Message';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Hidden } from '@mui/material';

const drawerWidth = 240;

const DrawerWrapper = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
}));

export default function AdminSideBar() {
    return (
        <Hidden smDown>
            <DrawerWrapper
                variant="permanent"
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar><Typography>농산커</Typography></Toolbar>
                <List>
                    <ListItem button component={Link} to="/admin/members">
                        <ListItemIcon>
                            <AdminIcon />
                        </ListItemIcon>
                        <ListItemText primary="회원 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/admin/products">
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="상품 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/admin/boards">
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="게시판 관리" />
                    </ListItem>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="사용자 홈" />
                    </ListItem>
                </List>
            </DrawerWrapper>
        </Hidden>
    );
}
