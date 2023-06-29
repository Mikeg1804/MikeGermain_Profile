
import React, {useState } from 'react';

import Bio from './components/Bio';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';


import {Box, Button, AppBar, Toolbar, Typography
} from '@material-ui/core';
import Contact from './components/contact';


function Aboutme() {
  const [showBio, setShowBio] = useState(false);
  const handleClick = () => {
    setShowBio((prevState) => !prevState);
    setShowResume(false);
    setShowPortfolio(false);
    setShowContact(false);
  };

  const [showResume, setShowResume] = useState(false);
  const handleResumeClick = () => {
    setShowResume((prevState) => !prevState);
    setShowBio(false);
    setShowPortfolio(false);
    setShowContact(false);
  };

  const [showPortfolio, setShowPortfolio] = useState(false);
  const handlePortfolioClick = () => {
    setShowPortfolio((prevState) => !prevState);
    setShowBio(false);
    setShowResume(false);
    setShowContact(false);
  };

  const [showContact, setShowContact] = useState(false);
  const handleContactClick = () => {
    setShowContact((prevState) => !prevState);
    setShowBio(false);
    setShowResume(false);
    setShowPortfolio(false);
  };
  return (
    <Box sx={{ flexGrow: 1,
      backgroundImage:  `url(${process.env.PUBLIC_URL}./images/MyPicture.jpg)`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundColor: 'Beige',
       }}>
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: 'blue' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingRight: '16px' }}>
          GERMAIN
        </Typography>
        <Button color="inherit" onClick={handleClick}>
          About me
        </Button>
        <Button color="inherit" onClick={handleResumeClick}>
          Resume
        </Button>
        <Button color="inherit" onClick={handlePortfolioClick}>
          Portfolio
        </Button>
        <Button color="inherit" onClick={handleContactClick}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>

    {showBio && <Bio />}
    {showResume && <Resume />}
    {showPortfolio && <Portfolio />}
    {showContact && <Contact />}
  </Box>
  );
}




function App() {
  return (
    <div className="App">

    <Aboutme/>
    </div>

  );
}











// function App() {
//   const pages = [{name:'About me', path: '/about'}, {name:'Portfolio', path: '/portfolio'},'Resume', 'Contact'];
//   return (
//     <BrowserRouter>
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>

//       {pages.map((page) => (
//       <Link to={page.path}>
//                {page.name}
//               </Link>))}
//     <Routes>
//       <Route element={<Aboutme/>} path='about'/>
//       <Route element={<Portfolio/>} path='portfolio'/>
//     </Routes>
//         </Toolbar>
//       </Container>
//     </AppBar>   
//     </BrowserRouter>

//   );
// }

export default App;
