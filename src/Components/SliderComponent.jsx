import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <div className="slider-text">
        <p>
          Program curated by{" "}
          <span> Medical experts, Researchers, & IITians </span>
        </p>
      </div>
      <Slider {...settings}>
        <div className="center">
          <img
            src="https://www.uptodd.com/images/newWebsite/institutions/iitkgp.webp"
            alt=""
          />
          <label>IITKGP</label>
        </div>
        <div className="center">
          <img
            src="https://www.uptodd.com/images/newWebsite/institutions/aiims.webp"
            alt=""
          />
          <label>IITKGP</label>
        </div>
        <div className="center">
          <img
            src="https://www.uptodd.com/images/newWebsite/institutions/iitbhu.webp"
            alt=""
          />
          <label>IITKGP</label>
        </div>
        <div className="center">
          <img
            src="https://www.uptodd.com/images/newWebsite/institutions/mit.webp"
            alt=""
          />
          <label>IITKGP</label>
        </div>{" "}
        <div className="center">
          <img
            src="https://www.uptodd.com/images/newWebsite/institutions/stanford.webp"
            alt=""
          />
          <label>IITKGP</label>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
