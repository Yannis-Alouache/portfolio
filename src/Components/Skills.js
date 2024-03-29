import React from 'react'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Skill from './Skill'

function Skills() {
  return (
    <>
        <section className="skills" id="skills">
            <Container className="self-center" maxWidth='lg'>
                <Typography variant='h3'>
                    My Skill Set
                </Typography>
                <Grid container>
                    <Grid item md={6}>
                        <Skill name="React" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Bootstrap" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" />
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="NodeJs" image="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Javascript" image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Python" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Material UI" image="https://mui.com/static/logo.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="HTML 5" image="https://cdn-icons-png.flaticon.com/512/732/732212.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="CSS 3" image="https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Tailwind" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Mongo Db" image="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Php" image="https://www.agence-88.fr/wp-content/uploads/2022/09/code-programming-php-software-develop-command-language-512.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Git" image="https://avatars.githubusercontent.com/u/18133?s=200&v=4"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Nginx" image="https://www.juliosblog.com/content/images/size/w2000/2016/06/nginx-smalllogo.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="ExpressJs" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Status_iucn_EX_icon_blank.svg/2048px-Status_iucn_EX_icon_blank.svg.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Django" image="https://www.kojac.nl/tailwind/images/Frontend/django.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="MySQL" image="https://pngimg.com/uploads/mysql/mysql_PNG11.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="NPM" image="https://seeklogo.com/images/N/npm-logo-01B8642EDD-seeklogo.com.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Angular" image="https://angular.io/assets/images/logos/angular/angular.svg"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Spring Boot" image="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-spring-boot-dashboard/0.13.2023072200/1689984300042/Microsoft.VisualStudio.Services.Icons.Default"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="NextJS" image="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="NodeMailer" image="https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="EmailJs" image="https://www.emailjs.com/logo.png"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Framer Motion" image="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"/>
                    </Grid>
                    <Grid item md={6}>
                        <Skill name="Sanity" image="https://www.sanity.io/static/images/logo_rounded_square.png"/>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </>
  )
}

export default Skills