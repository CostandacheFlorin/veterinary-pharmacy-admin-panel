import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ItemRating({rating}) {


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      <Typography component="legend">Nota</Typography>
      <Rating name="read-only" size="large" value={rating} readOnly />
      
    </Box>
  );
}
