import React from 'react'
import { Alert, Box, Grid, Typography } from '@mui/material'
import { Link } from '@mui/material'

function Banner(props) {
    let {name, description, link} = props
    return (
        <Box className="self-center bannerWrapper" maxWidth='lg'>
            <Grid container>
                <Grid item className='text-centerv' md={12}>
                    <Typography variant='h3'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item className='text-centerv' md={12}>
                    <p>{description}</p>
                </Grid>
                <Grid item px={{paddingTop: "20px"}} className='text-centerv' md={12}>
                    {link 
                        ? <Link className='linkToProject' href={link}>{link}</Link>
                    
                        : <Alert px={{paddingRight: "20px"}} severity="error">
                            Ce projet n'étant pas encore hébergé, il ne possède pas de lien
                          </Alert>
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner