import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  components:{
    MuiTypography:{
      variants: [
        {
          props: {
            variant:"body2",
          },
          style:{
            fontSize: 11,
          }
        },
        {
          props: {
            variant:"body3",
          },
          style:{
            fontSize: 9,
          }
        },
      ]
    }
  }
});

export default function TourCard({tour}) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img
          src={tour.image}
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {tour.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration} hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={2}
          >
            <Rating
              size="small"
              name="read-only"
              value={tour.rating}
              readOnly
              precision={0.5}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={2}>
                ({tour.numberOfReviews} reviews)
            </Typography>
            
          </Box>
          <Box>
                <Typography variant="h6" component="h3" marginTop={0}>
                    From C ${tour.price}  
                </Typography>
            </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
}
