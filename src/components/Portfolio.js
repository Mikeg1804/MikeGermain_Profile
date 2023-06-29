
import React, { useState } from 'react';
import { Link } from '@material-ui/core';
import HoriseonImage from '../images/Horiseon.png';
import HTMLPortfolioWebsite from '../images/HTMLPortfolioWebsite.png';
import PasswordGeneratorImage from '../images/PasswordGenerationWebsite.png';
import CodeTimer from '../images/CodeTimer.png';
import WorkDayScheduler from '../images/WorkDayScheduler.png';
import WeatherForecast from '../images/WeatherForecast.png';
import SoYoureLookingForAHotel from '../images/SoYoureLookingForAHotel.png';
import ProperReadmeApp from '../images/ProperReadmeApp.png';
import LogoMakerApp from '../images/LogoMakerApp.png';
import NoteTakerApp from '../images/NoteTakerApp.png';
import EmployeeDatabaseManagementSystem from '../images/EmployeeDatabaseManagementSystem.png';
import eCommerceApp from '../images/eCommerceApp.png';
import TechBlogger from '../images/TechBlogger.png';
import ChirperImage from '../images/Chirper.png';
import RegExTutorial from '../images/RegExTutorial.png';
import SocialMediaNetwork from '../images/SocialMediaNetwork.png';
import Jate from '../images/Jate.png';





function Portfolio () {
const [imageLoaded, setImageLoaded] = useState(false);
const HoriseonHandleClick = () => {
    setImageLoaded(!imageLoaded);
};

const [portfolioLoaded, setPortfolioLoaded] = useState(false);
const PortfolioHandleClick = () => {
    setPortfolioLoaded(!portfolioLoaded);
  };

const [passwordGenLoaded, setPasswordGenLoaded] = useState(false);
const PasswordGenHandleClick = () => {
    setPasswordGenLoaded(!passwordGenLoaded);
  };

const [codeTimerLoaded, setCodeTimerLoaded] = useState(false);
const CodeTimerHandleClick = () => {
    setCodeTimerLoaded(!codeTimerLoaded);
  };

const [workdayLoaded, setWorkdayLoaded] = useState(false);
const WorkdayHandleClick = () => {
    setWorkdayLoaded(!workdayLoaded);
  };

const [weatherForecastLoaded, setWeatherForecastLoaded] = useState(false);
const WeatherForecastHandleClick = () => {
    setWeatherForecastLoaded(!weatherForecastLoaded);
  };

const [hotelLoaded, setHoteltLoaded] = useState(false);
const HotelImageHandleClick = () => {
    setHoteltLoaded(!hotelLoaded);
  };

const [readmeLoaded, setReadmetLoaded] = useState(false);
const ReadmeHandleClick = () => {
    setReadmetLoaded(!readmeLoaded);
  };

const [logoMakerLoaded, setLogoMakerLoaded] = useState(false);
const LoggoMakerHandleClick = () => {
    setLogoMakerLoaded(!logoMakerLoaded);
    };
    
const [noteTakerLoaded, setNoteTakerLoaded] = useState(false);
const NoteTakerHandleClick = () => {
      setNoteTakerLoaded(!noteTakerLoaded);
      };
        
const [employeeDatabaseLoaded, setEmployeeDatabaseLoaded] = useState(false);
const EmployeeDatabaseHandleClick = () => {
      setEmployeeDatabaseLoaded(!employeeDatabaseLoaded);
      };

const [eCommerceLoaded, setEcommerceLoaded] = useState(false);
const EcommerceHandleClick = () => {
      setEcommerceLoaded(!eCommerceLoaded);
      };

const [techBlogLoaded, setTechBlogLoaded] = useState(false);
const TechBlogHandleClick = () => {
   setTechBlogLoaded(!techBlogLoaded);
  };

const [chirpLoaded, setChirpLoaded] = useState(false);
const ChirperHandleClick = () => {
    setChirpLoaded(!chirpLoaded);
  };

const [regexLoaded, setRegexLoaded] = useState(false);
const RegexHandleClick = () => {
    setRegexLoaded(!regexLoaded);
    };

const [socialMediaLoaded, setSocialMediaLoaded] = useState(false);
const ScocialMdeiaHandleClick = () => {
      setSocialMediaLoaded(!socialMediaLoaded);
      };    

const [jateLoaded, setJateLoaded] = useState(false);
const JateHandleClick = () => {
    setJateLoaded(!jateLoaded);
    };

return(
     
    <div>  

    <h4> 
    <div>
      <Link
        component="button"
        variant="body2"
        onClick={HoriseonHandleClick}
      >
        Horiseon-Refactor Website
      </Link>
      {imageLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://mikeg1804.github.io/horiseon-refactor/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={HoriseonImage} alt="Horiseon Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </div>
    </h4>
    <h4> 
    <div>
    <Link
      component="button"
      variant="body2"
      onClick={PortfolioHandleClick}
    >
      Mike-Germain Portfolio HTML Website
    </Link>
    {portfolioLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://mikeg1804.github.io/Mike-Germain-Portfolio/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={HTMLPortfolioWebsite} alt="HTMLPortfolio Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
     </div> 
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={PasswordGenHandleClick}
    >
      Password Generator Web-based App
    </Link>
    {passwordGenLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://mikeg1804.github.io/PasswordGeneratorHW/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={PasswordGeneratorImage} alt="Password Generation Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={CodeTimerHandleClick}
    >
      Quizz Timer App
    </Link>
    {codeTimerLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://mikeg1804.github.io/CodeTimerHW/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site

        <img src={CodeTimer} alt="Code Timer Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>

      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={WorkdayHandleClick}
    >
      Workday Scheduler Web-based App
    </Link>
    {workdayLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://mikeg1804.github.io/WorkDayCalendar/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={WorkDayScheduler} alt="Workday Scheduler Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={WeatherForecastHandleClick}
    >
      Weather Forecast Web-based App
    </Link>
    {weatherForecastLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://mikeg1804.github.io/Weather-Forecaster/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={WeatherForecast} alt="Weather Forecast Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={HotelImageHandleClick}
    >
      So you're Looking for a Hotel Website
    </Link>
    {hotelLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://samanthajoy13.github.io/so_youre_looking_for_a_hotel/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={SoYoureLookingForAHotel} alt="You want a hotel Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={ReadmeHandleClick}
    >
      Proper Readme Generator App
    </Link>
    {readmeLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://studio.youtube.com/channel/UCptqXNWJey91ton5XHU3GrA"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for demo
        <img src={ProperReadmeApp} alt="Proper Readme Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={LoggoMakerHandleClick}
    >
      Logo-Maker In-development App
    </Link>
    {logoMakerLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://www.youtube.com/watch?v=P4lYDfdlRqE"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for demo
        <img src={LogoMakerApp} alt="Logo Maker App Picture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={NoteTakerHandleClick }
    >
      Note Taker In-development App
    </Link>
    {noteTakerLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://noting-2aa8d91828c9.herokuapp.com/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={NoteTakerApp} alt="Note taker Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={EmployeeDatabaseHandleClick}
    >
      Employee Management System In-development App
    </Link>
    {employeeDatabaseLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://www.youtube.com/watch?v=gdn6VGXLYII"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for demo
        <img src={EmployeeDatabaseManagementSystem} alt="EmployeeDatabaseManagementSystem Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={EcommerceHandleClick}
    >
      Ecommerce Database In-development App
    </Link>
    {eCommerceLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://www.youtube.com/watch?v=4ajAA4fyiPg"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for demo
        <img src={eCommerceApp} alt="eCommerce Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={TechBlogHandleClick}
    >
      Tech Blog Website
    </Link>
    {techBlogLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://tech-blog-mg.herokuapp.com/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={TechBlogger} alt="Tech Blog Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={ChirperHandleClick}
    >
      Chirper Web-based Social Network App
    </Link>
    {chirpLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://chirperapp.herokuapp.com/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={ChirperImage} alt="Proper Readme Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={RegexHandleClick}
    >
      Regex Tutorial Writing
    </Link>
    {regexLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://gist.github.com/Mikeg1804/3cf97ab3232f4c7f741c51e1d7b6638c"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={RegExTutorial} alt="Regex Tutorial App Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={ScocialMdeiaHandleClick}
    >
      Social Network In-development App 
    </Link>
    {socialMediaLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://www.youtube.com/watch?v=sHFsrcLjM0A"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for demo
        <img src={SocialMediaNetwork} alt="Social Media App Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    <h4> 
    <Link
      component="button"
      variant="body2"
      onClick={JateHandleClick}
    >
      Just Another Text Editor (JATE) Web-based App
    </Link>
    {jateLoaded && (
        <div style={{ width: '300px', height: '300px', border: '1px solid black' }} className="image-container">
         <a
         href="https://texts-edit-1c472e5b7520.herokuapp.com/"
         target="_blank"
         rel="noopener noreferrer"
       > Click on image for site
        <img src={Jate} alt="JATE Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="image" />
        </a>
      </div>
      )}
    </h4>
    </div>  
);
};

export default Portfolio;


