import React, { useState } from 'react';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Hidden,
  Grid,
} from '@material-ui/core';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import MyPicture from './images/MyPicture.jpg';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: `url(${MyPicture})`,
          backgroundSize: 'cover',
          backgroundColor: 'Beige',
        }}
      >
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: 'blue', paddingRight: '16px' }}>
          <Hidden smDown>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                paddingRight: '16px',
                display: { xs: 'none', md: 'flex' },
              }}
            >
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
          </Hidden>

          <Hidden mdUp>
            <Button
              color="inherit"
              onClick={handleClick}
              size="small"
              style={{ marginRight: '4px' }}
              paddingUp="10px"
            >
              Menu
            </Button>
            <Menu anchorEl={null} open={showBio} onClose={handleClick}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Button onClick={handleClick}>About me</Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleResumeClick}>Resume</Button>
                </Grid>
                <Grid item>
                  <Button onClick={handlePortfolioClick}>Portfolio</Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleContactClick}>Contact</Button>
                </Grid>
              </Grid>
            </Menu>
          </Hidden>
          </Toolbar>
        </AppBar>

        <Box sx={{ flex: 1, padding: '16px' }}>
          {showBio && <Bio />}
          {showResume && <Resume />}
          {showPortfolio && <Portfolio />}
          {showContact && <Contact />}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: 'navy',
          color: 'white',
          p: 2,
          textAlign: 'center',
        }}
      >
        React based app engineered and developed by Mike Germain
      </Box>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <Aboutme />
    </div>
  );
}

export default App;
