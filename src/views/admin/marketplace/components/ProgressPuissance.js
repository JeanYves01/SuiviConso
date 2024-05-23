import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

export default function CircularProgressCountUp() {

  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 2,
    start: 0,
    end: 18,
  });

  return (
  
    <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={8}>
      
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate value={value2}>
          <Typography>{value2}kw</Typography>
        </CircularProgress>
        
      </Stack>
    </Stack>
  );
}