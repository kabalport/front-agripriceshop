import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    Tab,
    Tabs,
    Menu,
    MenuItem,
    Hidden,
    Box
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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

const AdminHeader: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const location = useLocation();
    const userId = localStorage.getItem('userId');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        window.location.href = newValue;
    };

    const handleAdminClick = () => {
        window.location.href = '/admin';
    };

    return (

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar>
                <Hidden mdUp>
                    <IconButton sx={{margin: 0, padding: 0, flexGrow: 0}}
                        size="small"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="navbar-menu"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>

                <Menu
                    id="navbar-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem component={RouterLink} to="/admin" onClick={handleMenuClose}>홈</MenuItem>
                    <MenuItem component={RouterLink} to="/login" onClick={handleMenuClose}>로그인</MenuItem>
                    <MenuItem component={RouterLink} to="/admin/register" onClick={handleMenuClose}>관리자 등록</MenuItem>
                    <MenuItem component={RouterLink} to="/admin/admin-manage" onClick={handleMenuClose}>관리자 관리</MenuItem>
                    <MenuItem component={RouterLink} to="/admin/products" onClick={handleMenuClose}>상품 관리</MenuItem>
                    <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>사용자 홈</MenuItem>

                </Menu>





                <Button color="inherit" href="/admin" sx={{flexGrow: 1}}>농산커</Button>


                {userId ? (
                    <Box display="flex" alignItems="center">
                        <Typography>{userId}님</Typography>
                        <Box mx={1}>
                            <Typography component={StyledLink} to="/admin/logout">
                                로그아웃
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <Box display="flex" alignItems="center"  style={{minHeight: '40px'}}>
                        <Button color="inherit" href="/admin/login" sx={{flexGrow: 0}}>로그인</Button>
                    </Box>
                )}



                {/*<IconButton color="inherit"  sx={{flexGrow: 0}}>*/}
                {/*    <Badge badgeContent={4} color="secondary">*/}
                {/*        <NotificationsIcon />*/}
                {/*    </Badge>*/}
                {/*</IconButton>*/}
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;
