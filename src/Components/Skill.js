import { Box } from '@mui/material'
import React from 'react'

function Skill(props) {
    let { name, image } = props

    return (
        <Box className='skill'>
            <img src={image} />
            <p>{name}</p>
        </Box>
    )
}

export default Skill