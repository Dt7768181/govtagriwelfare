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
                    <h2>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h2>
                    <p>Provides ₹6,000 per year in three installments to small and marginal farmers.</p>
                  </div>
                  <div>
                    <h2>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h2>
                    <p>Crop insurance scheme to protect farmers against crop failure due to natural calamities, pests, or diseases.</p>
                  </div>
                  <div>
                    <h2>Soil Health Card Scheme</h2>
                    <p>Provides farmers with soil quality information to help them use the right type and quantity of fertilizers.</p>
                  </div>
                </Slider>
                </div>
            </div>
        </div>
    );
}