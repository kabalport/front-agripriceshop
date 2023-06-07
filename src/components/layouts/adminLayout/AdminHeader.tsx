import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge, Tab, Tabs} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';


const StyledLink = styled(RouterLink)({
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '15px'
});

const useStyles = makeStyles((theme) => ({
    appBar: {
        minHeight: '40px',
        backgroundColor: '#f5f5f5',
        height: '40px',
        elevation: 0,
        boxShadow: 'none',
        borderBottom: 'none',
        justifyContent: "center"
    },
    toolbar: {
        minHeight: '40px',
        height: '40px',
        flexWrap: 'wrap',
        backgroundColor: "#f5f5f5",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

const AdminHeader: React.FC<{ handleDrawerToggle?: () => void }> = ({ handleDrawerToggle }) => {
    const classes = useStyles();
    const location = useLocation();
    const userName = localStorage.getItem('userName');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        window.location.href = newValue;
    };

    const handleAdminClick = () => {
        window.location.href = '/admin';
    };

    return (

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Tabs value={location.pathname} onChange={handleChange} sx={{flexGrow: 1}}>
                    <Tab label="사용자 화면" value="/" component={RouterLink} to="/" />
                    {/*<Tab label="관리자 화면" value="/admin" component={RouterLink} to="/admin" />*/}
                    <Tab label="관리자 화면" onClick={handleAdminClick} />
                </Tabs>


                {/* Notifications Icon */}
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Button color="inherit" href="/admin/login">로그인</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;
