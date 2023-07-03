import { Button, Typography } from '@mui/material'
import React from 'react'



const Resume = () => {
  return (
    <div>
   <Typography sx={{ color: 'white', paddingLeft: '20px' }}>
    <Button href='/resume/resume.pdf'><Typography sx={{ color: 'beige'}}>DownLoad Resume </Typography></Button>
    </Typography>
    </div>
  )
}

export default Resume


// Need help with a function to render the resume.