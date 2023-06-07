import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Tab, Tabs } from '@mui/material';
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
        flexWrap: 'wrap',
        backgroundColor: "#f5f5f5",
        maxHeight: '80px'
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));
const UserHeader: React.FC = () => {
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
            <Toolbar className={classes.toolbar}  style={{paddingLeft:0}}>
                <Tabs value={location.pathname} onChange={handleChange}>
                    <Tab label="사용자 화면" value="/" component={RouterLink} to="/" />
                    {/*<Tab label="관리자 화면" value="/admin" component={RouterLink} to="/admin" />*/}
                    <Tab label="관리자 화면" onClick={handleAdminClick} />

                </Tabs>
                <Typography variant="h6" color="inherit"  className={classes.toolbarTitle}>
                </Typography>
                {userName ? (
                    <Box display="flex" alignItems="center">
                        <Typography>{userName}님</Typography>
                        <Box mx={1}>
                        <Typography component={StyledLink} to="/logout">
                            로그아웃
                        </Typography>
                    </Box>
                    </Box>
                ) : (
                    <Box display="flex" alignItems="center">
                        <Typography component={StyledLink} to="/login">
                            로그인
                        </Typography>
                        <Box mx={1} /> {/* This will give space between Login and Register */}
                        <Typography component={StyledLink} to="/register">
                            회원가입
                        </Typography>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default UserHeader;
