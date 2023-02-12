import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system'
import { useLocation } from "react-router-dom"
import mainLogo from "../Assets/Images/logo.png"
import githubLogo from "../Assets/Images/github-logo.png"
import { Link } from "react-scroll"



function Navbar() {

    let location = useLocation()

    let isOnHomePage = location.pathname === "/" ? true : false

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
                        <Typography className='link' variant="h6" component="div">
                            <a href='/' className=''>Home</a>
                        </Typography>

                        {isOnHomePage && (
                            NavElements()
                        )}
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    )
}

export default Navbar