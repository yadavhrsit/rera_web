import React from 'react'
import { Button } from '@mui/material'

function PricingButton(props) {
    return (
        <Button fullWidth variant="contained" sx={{
            backgroundColor: '#27a376', color: 'white', height: '50px', fontSize: '20px'
            , '&:hover': {
                backgroundColor: '#39cc97' // Replace with your desired color
            }
        }}>
            {props.text}
        </Button>
    )
}

export default PricingButton