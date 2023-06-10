import React from 'react'
import { Typography } from '@mui/material'

export function CardHeading(props) {
    return (
        <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '2rem', marginTop: '10px' }}>
            {props.heading}
        </Typography>
    )
}

export function CardSubHeading(props) {
    return (
        <Typography variant='body2' fontSize={'30px'} marginTop={'10px'} marginBottom={'10px'}>
            {props.subheading}
        </Typography>
    )
}

export function CardBody(props) {
    return (
        <Typography variant="p" sx={{ fontWeight: '500', fontSize: '18px', marginTop: '10px' }}>
            {props.data}
        </Typography>
    )
}

