import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
// import jwt, { JwtPayload } from 'jsonwebtoken';



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
const UserHeader: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
    const accessToken = localStorage.getItem('accessToken');
    let userId = localStorage.getItem('userId');
    const secretkey = `54185747e7e05d14adc60c52ef154cb5a76db1073321b08a587b8532fd3122c62a99ec7440ab9c62d13a9a1`


    if (accessToken) {

        // const decodedToken = jwt.verify(accessToken, secretkey) as JwtPayload; // 'your-secret-key'는 실제 사용한 비밀 키로 교체해야 합니다.
        // username = decodedToken.sx; // 'name' 필드는 토큰에 따라 다를 수 있습니다.
    }



    const handleAdminClick = () => {
         window.location.href = '/admin';
     };


    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}  style={{paddingLeft:0}}>
                <Tabs value={location.pathname}>
                    <Tab label="관리자 화면으로 이동" onClick={handleAdminClick} />
                </Tabs>
                <Typography variant="h6" color="inherit"  className={classes.toolbarTitle}>
                </Typography>
                {accessToken ? (
                    <Box display="flex" alignItems="center">
                        <Typography style={{minHeight: '40px'}}>{userId}님</Typography>
                        <Box mx={1}  style={{minHeight: '40px'}}>
                        <Typography style={{minHeight: '40px'}} component={StyledLink} to="/logout">
                            로그아웃
                        </Typography>
                    </Box>
                    </Box>
                ) : (
                    <Box display="flex" alignItems="center"  style={{minHeight: '40px'}}>
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
