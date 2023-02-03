import React from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Skill from '../Components/Skill'
import { Grid } from '@mui/material'

function Technologies(props) {
    let { technologies } = props

  return (
    <Container sx={{marginBottom: "7em"}} maxWidth="lg">
        <Typography variant="h3">
            Technologies
        </Typography> 
        <section className='skills'>
            <Grid container>
              {technologies.map(function(technologie) {
                return (
                  <Grid md={6}>
                    <Skill name={technologie.name} image={technologie.image}/>
                  </Grid>
                )
              })}
            </Grid>
        </section>
    </Container>
  )
}

export default Technologies