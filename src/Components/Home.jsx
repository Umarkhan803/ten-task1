import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import Slider from "./Slider";

const Home = ({ bookingText }) => {
  return (
    <>
      <section className="Home-page">
        <div className="banner-text">
          <h1>Give Your Baby the</h1>
          <h1>Best Possible Start!</h1>
          <h2>Nurture your baby's developing Brain</h2>
          <p>Expert Guided Personalised Program - Just For Your Baby</p>
          <ul>
            <li>
              <FaCheckCircle /> No Pressure - No testing
            </li>
            <li>
              <FaCheckCircle /> No screen Time
            </li>
            <li>
              <FaCheckCircle /> 10 Minutes Daily
            </li>
            <li>
              <FaCheckCircle /> Loved by babies
            </li>
            <li>
              <FaCheckCircle /> One Stop Parenting Solution
            </li>
          </ul>
          <Button text={bookingText} />
        </div>
        <div className="banner-image">
          <img
            src="https://www.uptodd.com/images/newWebsite/home-page-banner.webp"
            alt=""
          />
        </div>
      </section>
      <section className="slider">
        <Slider />
      </section>
    </>
  );
};

export default Home;
