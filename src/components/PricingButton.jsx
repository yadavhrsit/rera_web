import React from 'react'
import { Button } from '@mui/material'

function PricingButton(props) {
    return (
        <Button fullWidth variant="contained" sx={{
            backgroundColor: '#dee2e6', color: 'black', height: '50px', fontSize: '22px'
            , '&:hover': {
                backgroundColor: '#B2B2B2'
            }
        }}>
            {props.text}
        </Button>
    )
}

export default PricingButton