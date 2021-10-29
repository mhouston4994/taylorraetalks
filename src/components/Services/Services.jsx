import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Slider from "react-slick";
import Card from './Card'

const Services = () => {

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
  const name = '30 Minute Tarot Readings'
  const desc = `These shorter readings are great if you are interested in one area of your life. I will pull 5 cards to provide you with clarity around a question or event of your choice. There will also be an Oracle pull.



  After our session I will email pictures of your cards and the tarot spread to you. I will also attach a written diagnostic of your spread and how the cards are related to each other so you have a saved copy. If preferred, the Zoom meet can be sent instead. (Does require a google email)`
  const serviceInfo = [
    {
      name: '30 Minute Tarot Readings',
    desc: `These shorter readings are great if you are interested in one area of your life. I will pull 5 cards to provide you with clarity around a question or event of your choice. There will also be an Oracle pull.

    After our session I will email pictures of your cards and the tarot spread to you. I will also attach a written diagnostic of your spread and how the cards are related to each other so you have a saved copy. If preferred, the Zoom meet can be sent instead. (Does require a google email)`,
    link: 'https://calendly.com/taylorraetalks_/30-min-tarot-reading?back=1'
  },
    {
      name: '1 Hour Tarot Readings ',
    desc: `This longer Tarot session allows us to go deeper into one area of your life or explore multiple. These spreads are typically 12-14 cards, although I will pull clarifying cards as needed. I will also end with an Oracle pull.

    After our session I will email pictures of your cards and the tarot spread to you. I will also attach a written diagnostic of your spread and how the cards are related to each other so you have a saved copy. If preferred, the Zoom meet can be sent instead.`,
    link: 'https://calendly.com/taylorraetalks_/1-hour-tarot-reading?back=1'
  },
    {
      name: 'Awakening Call (coaching services)',
    desc: `This will be our first free coaching call. We will discuss you, your goals, and where you would like to be. Please use this if you are not a returning client.`,
    link: 'https://calendly.com/taylorraetalks_/awakening-call?back=1'
  },
    {
      name: 'Coaching Link (only for scheduling calls)',
    desc: `For returning clients, please book your next session here!`,
    link: 'https://calendly.com/taylorraetalks_/coaching-call-1-1?back=1'
  },
    {
      name: '1:1 Breathwork',
    desc: `These 75 minute breathing sessions are for you to use purposefully carved out time to center yourself back into your body. There will be an introduction and a brief overview followed by intentional calming and breathing techniques. The end of the session is delegated for after care and support.
    Please wear comfortable clothing, have a quiet place to sit/lay down, and bring a journal for the after care process.`,
    link: 'https://calendly.com/taylorraetalks_/90-min-breathwork-session?back=1'
  },
  ]


  return (
    <section id="services">
      {/* <Container> */}
        <div className="project-wrapper">
          <Title title="Services" />
            <div className="serviceContainer">
              {serviceInfo.map(x=>{
                return(
                <Card name={x.name} desc={x.desc} link={x.link}></Card>
                )
              })}
              
            </div>
          
        </div>
      {/* </Container> */}
    </section>
  );
};


export default Services;
