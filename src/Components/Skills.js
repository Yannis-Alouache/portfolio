import React from 'react'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Skill from './Skill'

function Skills() {
  return (
    <>
        <section className="skills">
            <Container className="self-center" maxWidth='lg'>
                <Typography variant='h3'>
                    My Skill Set
                </Typography>
                <Grid container>
                    <Grid md={6}>
                        <Skill name="React" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Bootstrap" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" />
                    </Grid>
                    <Grid md={6}>
                        <Skill name="NodeJs" image="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Javascript" image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Python" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Material UI" image="https://mui.com/static/logo.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="HTML 5" image="https://cdn-icons-png.flaticon.com/512/732/732212.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="CSS 3" image="https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Tailwind" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Styled Component" image="https://avatars.githubusercontent.com/u/20658825?s=200&v=4"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Mongo Db" image="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Php" image="https://www.agence-88.fr/wp-content/uploads/2022/09/code-programming-php-software-develop-command-language-512.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Git" image="https://avatars.githubusercontent.com/u/18133?s=200&v=4"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Nginx" image="https://www.juliosblog.com/content/images/size/w2000/2016/06/nginx-smalllogo.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Express" image="https://i.postimg.cc/8kqSDLNP/pngwing-com.png"/>
                    </Grid>
                    <Grid md={6}>
                        <Skill name="Django" image="https://www.kojac.nl/tailwind/images/Frontend/django.png"/>
                    </Grid>

                </Grid>
            </Container>
        </section>
    </>
  )
}

export default Skills