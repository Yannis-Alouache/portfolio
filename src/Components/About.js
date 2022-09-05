import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import avatar from "../Assets/Images/avatar1.png"
import resume from '../Assets/Pdf/CV.pdf'

function About() {
  return (
    <>
        <section className='about'>
            <Container className="self-center" maxWidth='lg'>
                <Grid className='wrapper' container spacing={5}>
                    <Grid item xs={6} xl={4} sm={5}>
                        <img src={avatar} width={220} />
                    </Grid>
                    <Grid className='text' item xs={6} xl={8} sm={7}>
                        <h1>
                            I have been working on different projects for more than {new Date().getFullYear() - 2019}+ years learning concept such as frontend, backend, UI and UX. <br />
                            I am passionate about how things work. <br />
                            In my personal life I love reading, watching series, going to the gym and petting dogs.
                        </h1>
                        <a href={resume} target="blank">MY RESUME</a>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </>
  )
}

export default About