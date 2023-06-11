import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export const SectionContainer = styled(Box)(({ greybackground }) => ({

    display: 'flex',
    flexDirection: 'column',
    padding: '40px 20px 100px',
    backgroundColor: greybackground ? '#dee2e6' : 'white'
}));

export const SectionHeading = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontSize: '80px',
    color: '#454545',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    },
}));

export const CardsGrid = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: '25px',
    marginTop: '20px'
})

export const ItemCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center'
})

export const CardContentsWrapper = styled(CardContent)({
    padding: '30px 15px 0px 15px',
    gap: '3px',
    display: 'flex',
    flexDirection: 'column',
})

