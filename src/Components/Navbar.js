import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system'

import mainLogo from "../Assets/Images/logo.png"
import githubLogo from "../Assets/Images/github-logo.png"


function Navbar() {
  return (
        <>
            <Container maxWidth='xl'>
                <AppBar className='navbar' position="static">
                    <Toolbar>
                        <a href='/'>
                            <img className='logos main-logo' src={mainLogo} />
                        </a>
                        <a href='https://github.com/Yannis-Alouache' target="blank">
                            <img className='logos github-logo' src={githubLogo} />
                        </a>
                        <Typography className='link' variant="h6" component="div">
                            <a href='/' className=''>About</a>
                        </Typography>
                        <Typography className='link' variant="h6" component="div">
                            <a href='/' className=''>Work</a>
                        </Typography>
                        <Typography className='link' variant="h6" component="div">
                            <a href='/' className=''>Contact</a>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
  )
}

export default Navbar