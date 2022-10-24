
import { Typography } from '@mui/material';
import React from 'react'

import Title from './Title';

function Summary() {
  return (
    <div>
      <Title>Inventory Summary</Title>
      <p style={{textAlign: "center"}} >
      <Typography color="text.primary" sx={{ flex: 1 }}>
      Total Items 
      </Typography>
      <Typography component="p" variant="h4">
      
        5
      </Typography>
      <br/>
      <Typography color="text.primary" sx={{ flex: 1 }}>
      Total Value
      </Typography>
      <Typography component="p" variant="h4">
      $4600
      </Typography>
      </p>
        
    </div>
  )
}

export default Summary
