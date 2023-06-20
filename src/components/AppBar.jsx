import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from '@mui/material';
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginSection from './LoginSection';



const appBarStyle = {
    backgroundColor: '#434242',
    position: 'fixed',
    fontSize: '20px',
    textTransform: 'uppercase',
};

const linkStyle = {
    padding: '6px 20px',
    color: 'white',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    lineHeight: '1.5'
};

const activeLinkStyle = {
    padding: '6px 20px',
    color: 'black',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '5px',
};

const activeLinkStyleMob = {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#434242',
};

const linkStylesMob = {
    margin: '0',
    color: '#434242',
    textDecoration: 'none',
}

const AppBarComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [activeLink, setActiveLink] = React.useState(""); // Add state for active link

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    const [loginClick, setloginClick] = useState(false);

    const loginClickHandler = () => {
        setloginClick(!loginClick);
    }


    return (
        <AppBar style={appBarStyle}>
            <Toolbar
                sx={{
                    marginLeft: '30px',
                    marginRight: '30px',
                    '@media (max-width: 600px)': {
                        marginRight: '0px',
                        marginLeft: '5px',
                    },
                }}
            >
                <Typography variant="h6" component="div">
                    RERA Logo
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    {isMenuOpen ? (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose} style={activeLink === "about" ? activeLinkStyleMob : linkStylesMob}>
                            <Link
                                to="about"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={() => handleSetActiveLink("about")}
                            >
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} style={activeLink === "features" ? activeLinkStyleMob : linkStylesMob}>
                            <Link
                                to="features"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={() => handleSetActiveLink("features")}
                            >
                                Features
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} style={activeLink === "pricing" ? activeLinkStyleMob : linkStylesMob}>
                            <Link
                                to="pricing"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={() => handleSetActiveLink("pricing")}
                            >
                                Pricing
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} style={activeLink === "faqs" ? activeLinkStyleMob : linkStylesMob}>
                            <Link
                                to="faqs"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={() => handleSetActiveLink("faqs")}
                            >
                                FAQs
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} style={linkStylesMob}>
                            Login
                        </MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Link
                        to="about"
                        style={activeLink === "about" ? activeLinkStyle : linkStyle}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={() => handleSetActiveLink("about")}
                    >
                        About
                    </Link>
                    <Link
                        to="features"
                        style={activeLink === "features" ? activeLinkStyle : linkStyle}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={() => handleSetActiveLink("features")}
                    >
                        Features
                    </Link>
                    <Link
                        to="pricing"
                        style={activeLink === "pricing" ? activeLinkStyle : linkStyle}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={() => handleSetActiveLink("pricing")}
                    >
                        Pricing
                    </Link>
                    <Link
                        to="faqs"
                        style={activeLink === "faqs" ? activeLinkStyle : linkStyle}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={() => handleSetActiveLink("faqs")}
                    >
                        FAQs
                    </Link>
                    <Button sx={{ color: 'white', fontWeight: '500', fontSize: '18px', lineHeight: '1.8', padding: '1px 14px', backgroundColor: '#2979ff' }}
                        onClick={loginClickHandler}
                    >
                        Login
                    </Button>
                    {
                        loginClick ? (<LoginSection />) : ("")
                    }

                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
