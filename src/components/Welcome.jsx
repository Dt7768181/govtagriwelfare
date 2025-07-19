import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/Welcome.css";

export default function Welcome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

    return(
        <div className="Welcome-Page">
            <div className="Welcome-Container">
                <h1> Welcome</h1>
                <div className='Welcome-Carousel'>
                <Slider {...settings}>
                  <div>
                    <h1>hi</h1>
                  </div>
                  <div>
                    <h1>Hello</h1>
                  </div>
                </Slider>
                </div>
            </div>
        </div>
    );
}