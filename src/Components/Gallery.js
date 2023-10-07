import React, { useState, useCallback, useEffect } from 'react'
import ImageViewer from 'react-simple-image-viewer';
import { Typography } from '@mui/material'
import { ImageList, ImageListItem } from '@mui/material'
import { Container } from '@mui/system'

function Gallery(props) {
    
    let { gallery } = props
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [images, setImages] = useState([]);

    const openImageViewer = useCallback((index) => {
        setIsViewerOpen(true);
        setCurrentImage(index);
    }, []);
    
    const closeImageViewer = () => {
        setIsViewerOpen(false);
        setCurrentImage(0)
    };

    useEffect(() => {
        gallery.map((item) => {
            return (
                setImages(images => images.concat(require("../Assets/Images/" + item)))
            )
        })
    }, [gallery])

  return (
    <Container sx={{marginBottom: "7em"}} maxWidth="lg">
        <Typography variant='h3'>
        Gallery
        </Typography>
        <ImageList cols={3}>
            {gallery.map((item, index) => (
                <ImageListItem key={item} >
                    <img
                        onClick={() => openImageViewer(index)}
                        style={{cursor: 'pointer'}}
                        src={require("../Assets/Images/" + item) + "?w=164&h=164&fit=crop&auto=format"}
                        srcSet={require("../Assets/Images/" + item) + "?w=164&h=164&fit=crop&auto=format&dpr=2 2x"}
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>

        {isViewerOpen && (
            <ImageViewer
                src={images}
                currentIndex={ currentImage }
                disableScroll={ true }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
            />
        )}
    </Container>
  )
}

export default Gallery