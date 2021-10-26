import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { Parallax } from 'react-scroll-parallax';


const ParalaxBreak1 = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
<Parallax className="paralaxBreak" y={[30, isDesktop ? -20 : -25]} tagOuter="figure">
        <img id="section1" />
    </Parallax>
  );
};
const ParalaxBreak2 = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
<Parallax className="paralaxBreak" y={[isDesktop ? -20 : 12, isDesktop ? 0 : -10]} tagOuter="figure">
        <img id="section2" />
    </Parallax>
  );
};
const ParalaxBreak3 = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
<Parallax className="paralaxBreak" y={[isDesktop ? -20 : 12, isDesktop ? 0 : -10]} tagOuter="figure">
        <img id="section3" />
    </Parallax>
  );
};

export {ParalaxBreak1, ParalaxBreak2, ParalaxBreak3};
