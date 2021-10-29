import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Slider from "react-slick";
import ProjectImg from '../Image/ProjectImg';
import { Link } from 'react-scroll';



const Card = (props) => {

  let {name, desc, link} = props
  return (
    <div className="serviceCard">
      <div className="serviceBox">
        <div className="serviceContent">
          <h3>{name}</h3>
          <p>{desc}</p>
          <a target="_blank" href={link}>Learn More</a>
        </div>
      </div>
    </div>

  );
};

export default Card;
