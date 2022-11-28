import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function StarRating({value, onChange, isDisabled}) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Оценки</Typography>
      <Rating
        name="simple-controlled"
        disabled={isDisabled}
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      />
    </Box>
  );
}