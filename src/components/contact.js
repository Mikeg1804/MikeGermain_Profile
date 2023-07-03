import React from 'react';

import { Box, Typography
} from '@mui/material';

function Contact() {
    return (
      <div>
        <Box>
        <Typography sx={{ color: 'beige', paddingLeft: '20px' }}>
        <br />
        <a href="https://www.linkedin.com/in/mike-germain-8282356"> <Typography sx={{ color: 'beige'}}>LinkedIn</Typography></a>
        <br />
        <a href="https://github.com/Mikeg1804"><Typography sx={{ color: 'beige'}}>GitHub</Typography></a>
        <p> Email: mikeg1804@gmail.com</p>
        </Typography>
        </Box>
      </div>
    );
  }

  
  export default Contact;