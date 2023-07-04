import React from 'react';
import { Box, Typography } from '@mui/material';

function Bio() {
  const text =
    'My name is Michael Germain. I have about 20 years experience working in various roles in business, including operations, finance and investment. Over the years, I have observed a lot of areas and processes in business that can be improved with technology. By improvement, I mean efficiency and security. As such, I have been learning about software engineering and computer programing from UC Berkeley Extension with the plan to leverage my combined experience and technology knowledge to come up with better customized solutions for various business problems whether through investing or through direct development of solutions.';

  return (
    <div>
      <Box
        sx={{
          maxWidth: '100%',
          width: '75%',
          height: 'auto',
          boxShadow: 100,
          paddingLeft: '80px',
          backgroundColor: 'rgba(50, 50, 50)',
        }}
      >
        <br />
        
        <Typography sx={{ color: 'white', padding: '16px', fontWeight: 'bold' }}>
          {text}
        </Typography>
      
      </Box>
    </div>
  );
}

export default Bio;
