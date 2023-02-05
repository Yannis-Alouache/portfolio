import React from 'react'
import { Typography } from '@mui/material'
import { ImageList, ImageListItem } from '@mui/material'
import { Container } from '@mui/system'

function Gallery(props) {
    
    let { gallery } = props

  return (
    <Container sx={{marginBottom: "7em"}} maxWidth="lg">
        <Typography variant='h3'>
        Gallery
        </Typography>
        <ImageList cols={3}>
            {gallery.map((item) => (
                <ImageListItem key={item.image}>
                <img
                    src={require("../Assets/Images/" + item.image) + "?w=164&h=164&fit=crop&auto=format"}
                    srcSet={require("../Assets/Images/" + item.image) + "?w=164&h=164&fit=crop&auto=format&dpr=2 2x"}
                    alt=""
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    </Container>
  )
}

export default Gallery