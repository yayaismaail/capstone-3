import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const About = () => (
  <div className="about">
    <Link to="/"><FontAwesomeIcon icon={faChevronLeft} className="chevronIcon" /></Link>
    <h1 className="app-title">About the App</h1>
    <p className="app-info">
      Welcome to the weather app! Here,
      you can stay up to date on the latest
      weather conditions in your city.
    </p>
    <p className="app-info">
      We understand that weather can have a significant impact on your daily life,
      whether you are planning your commute, your outdoor activities, or your wardrobe.
      That&apos;s why we strive to provide you with the
      most detailed and easy-to-understand information possible,
      so you can make informed decisions about your day.
    </p>
    <div className="contact">
      <h4>Contact me</h4>
      <p>ismailhm888@gmail.com</p>
      <p>github @yayaismaail</p>
    </div>
  </div>
);

export default About;
