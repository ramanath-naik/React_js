import { Typography } from '@mui/material'
import { Container } from '@mui/material/';
import Box from "@mui/material/Box";
import React from 'react'
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordian';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from "@mui/material/Paper";
import BasicModal from '../components/Modal';


export default function Tour() {
  return (
    <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display:"flex"}}>
            <img src='https://imageio.forbes.com/specials-images/imageserve/6450925ea1f36aea09dc456e/Las-Vegas-sign/0x0.jpg?format=jpg&height=2234&width=3350' 
            alt='' 
            height={325}
            />
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this Ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Las Vegas (often informally abbreviated to "Vegas") is the most populous city in the state of Nevada, United States, the seat of Clark County, and an internationally known vacation, shopping, entertainment, and gambling destination. It was established in 1905 and officially became a city in 1911. It is the largest U.S. city founded in the 20th century.
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" component="h4" marginTop={3}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions/>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal/>
        </BottomNavigation>
      </Paper>
    
    </Container>
  )
}
