import React from 'react'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'

function Banner(props) {
    let {name, description} = props
    return (
        <Container sx={{marginBottom: "7em", paddingTop: "7em"}} className="self-center" maxWidth='lg'>
            <Grid container>
                <Grid item className='text-centerv' md={12}>
                    <Typography variant='h3'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item className='text-centerv' md={12}>
                    <p>{description}</p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Banner