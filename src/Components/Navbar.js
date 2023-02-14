import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system'
import { useLocation } from "react-router-dom"
import mainLogo from "../Assets/Images/logo.png"
import githubLogo from "../Assets/Images/github-logo.png"
import { Link } from "react-scroll"
import { Box, Drawer } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Navbar() {

    let location = useLocation()
    let isOnHomePage = location.pathname === "/" ? true : false
    const [open, setOpen] = useState(false)

    function toggleDrawer() {
        setOpen(!open)
    }

    function NavElements() {
        return (
            <>  
                <Typography className='link' variant="h6" component="div">
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        Skills
                    </Link>
                </Typography>

                <Typography className='link' variant="h6" component="div">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-40} duration={500}>
                        Projects
                    </Link>
                </Typography>

                <Typography className='link' variant="h6" component="div">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </Typography>
            </>
        )
    }

    
    function NavElementsMobile() {
        return (
            <>  
                <Typography className='link' variant="h6" component="div" sx={{padding: "20px"}}>
                    <Link activeClass="active" to="skills" className='underline' spy={true} smooth={true} offset={-50} duration={500}>
                        Skills
                    </Link>
                </Typography>

                <Typography className='link' variant="h6" component="div" sx={{padding: "20px"}}>
                    <Link activeClass="active" to="projects" className='underline' spy={true} smooth={true} offset={-40} duration={500}>
                        Projects
                    </Link>
                </Typography>

                <Typography className='link' variant="h6" component="div" sx={{padding: "20px"}}>
                    <Link activeClass="active" to="contact" className='underline' spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                </Typography>
            </>
        )
    }

    return (
        <>
            <Container maxWidth='xl'>
                <AppBar className='navbar' position="static">
                    <Toolbar>
                        <a href='/'>
                            <img className='logos main-logo' alt='logo' src={mainLogo} />
                        </a>
                        <a href='https://github.com/Yannis-Alouache' target="blank">
                            <img className='logos github-logo' alt='github' src={githubLogo} />
                        </a>

                        <Box className='hideMobile flex'>
                            <Typography className='link' variant="h6" component="div">
                                <a href='/' className=''>Home</a>
                            </Typography>

                            {isOnHomePage && (
                                NavElements()
                            )}
                        </Box>

                        <DehazeIcon onClick={toggleDrawer} className="showMobile navIcon" />
                        <Drawer
                            open={open}
                            onClose={toggleDrawer}
                        >   
                            <Box sx={{width: "250px", background: "#111", height: "100%", color: "white"}}>
                                <Typography className='link' variant="h6" component="div" sx={{padding: "20px"}}>
                                    <a href='/' className='white'>Home</a>
                                </Typography>
                                {isOnHomePage && (
                                    NavElementsMobile()
                                )}
                            </Box>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    )
}

export default Navbar