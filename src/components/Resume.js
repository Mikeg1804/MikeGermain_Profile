import { Button, Typography, Box } from '@mui/material';
import React from 'react';

const Resume = () => {
  return (
    <div>
      <Box
        sx={{
          maxWidth: '100%',
          height: 'auto',
          boxShadow: 100,
          backgroundColor: 'rgba(50, 50, 50)',
          padding: '20px',
          overflowWrap: 'break-word',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            textAlign: 'justify',
            '@media (max-width: 500px)': {
              fontSize: '14px',
            },
            '@media (min-width: 501px) and (max-width: 768px)': {
              fontSize: '16px',
            },
            '@media (min-width: 769px)': {
              fontSize: '18px',
            },
          }}
        >

    <h4>Michael Germain is a seasoned and dynamic executive and investment professional with a remarkable career highlighted by strategic financial management, venture investments, and expertise in finance, accounting, and technology. With a proven track record of success, Michael has held pivotal leadership positions in renowned investment firms, driving growth and delivering exceptional results.</h4>
  
    <h4>Furthermore, Mike designed and executed a strategic growth plan for TRUE through mergers and acquisitions (M&A) and organic expansion. His visionary approach and analytical acumen enabled him to help with due diligence to assess good acquisition targets. Mike co-spearheaded the buy-side acquisition efforts, successfully growing TRUE's assets under management (AUM) from one billion dollars to two billion dollars. Additionally, he co-led the sell-side efforts, orchestrating a successful exit for TRUE's owners, generating significant returns on their investments.</h4>

    <h4>Before joining TRUE Capital Management, Mike served as the Chief Accounting Officer (CAO) and Vice President of Finance at Canyon Bridge Capital Partners for 1.5 years. In this role, he oversaw the accounting function, ensuring accurate financial reporting and adherence to regulatory standards. Mike's attention to detail and comprehensive understanding of accounting principles helped maintain the financial integrity of the organization.</h4>

    <h4>Mike holds the esteemed designation of Chartered Financial Analyst (CFA), which reflects his comprehensive knowledge and expertise in investment analysis, portfolio management, and ethical standards. His CFA accreditation allows him to provide invaluable insights and make informed investment decisions, driving superior results for clients.</h4>

    <h4>Additionally, Mike is a Certified Public Accountant (CPA), demonstrating his proficiency in accounting, auditing, and taxation. His expertise in financial reporting standards and regulatory compliance ensures the accuracy and transparency of financial information.</h4>

    <h4>Moreover, Mike has expanded his skill set by completing a Full Stack Developer program at UC Berkeley Extension. This technical proficiency empowers him to bridge the gap between finance and technology, utilizing his coding abilities to optimize financial processes, develop data-driven tools, and automate reporting systems. Mike's strong technological aptitude enhances his strategic decision-making and operational efficiency efforts.</h4>

    <h4>With his strategic mindset, financial acumen, technological expertise, and regulatory knowledge, Mike Germain is a highly accomplished leader who consistently drives growth and delivers exceptional results. His ability to combine financial insights with technological innovation sets him apart, making him an invaluable asset to any organization seeking a well-rounded and forward-thinking financial professional.</h4>

    <Button href='/resume/resume.pdf'><Typography sx={{ color: 'beige'}}>DownLoad Resume </Typography></Button>
    </Typography>
    </Box>
    </div>
  )
}

export default Resume


