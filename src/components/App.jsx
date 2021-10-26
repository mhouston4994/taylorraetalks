import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Hero from '../components/Hero/Hero';
import {ParalaxBreak1, ParalaxBreak2, ParalaxBreak3} from '../components/Paralax/Paralax';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { PortfolioProvider } from '../context/context';
import { ParallaxProvider } from 'react-scroll-parallax';



import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, [])
  



  return (
    <ParallaxProvider>
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
          <Hero />
          <ParalaxBreak1 style={{overflow: 'hidden'}}/>
          <About />
          <ParalaxBreak2 style={{overflow: 'hidden'}}/>
          <Services />
          <ParalaxBreak3 style={{overflow: 'hidden'}}/>
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </ParallaxProvider>
  );
}

export default App;
