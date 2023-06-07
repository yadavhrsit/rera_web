import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqItem = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div key={props.index} style={{ marginTop: '8px' }}>
            <Accordion expanded={expanded} sx={{ backgroundColor: '#fffff', boxShadow: 3 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: '#454545',
                        backgroundColor: '#fffff',
                    }}
                    onClick={handleExpand}
                >
                    <Typography variant="body2"
                        align="left" color={'#454545'}
                        fontSize={{ xs: '20px', sm: '26px' }}
                        fontWeight={'bold'}
                        lineHeight={2.5}
                    >
                        {props.question}
                    </Typography>

                </AccordionSummary>
                <AccordionDetails >
                    <Typography variant="p" align="left" fontSize={{ xs: '16px', sm: '20px' }} fontWeight={500} color={'#454545'}>
                        {props.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div >
    );
};

export default FaqItem;
