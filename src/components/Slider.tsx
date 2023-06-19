import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Traditiondress from "../asserts/images/Traditionaldress.jpg";
import Lights from "../asserts/images/Lights.jpg";
import Homedecor from "../asserts/images/HomeDecor.jpg";
import Western from "../asserts/images/Westerndress.jpg";
import Perfumes from "../asserts/images/Perfumes.jpg";
import SmartPhones from "../asserts/images/iphone.jpg";

export default function Slider() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        swipeable={true}
        dynamicHeight={false}
        showStatus={false} // Hide the status indicators
        showIndicators={false} // Hide the slide indicators
        showThumbs={false} // Hide the thumbnail images
        centerMode // Enable center mode
        centerSlidePercentage={100} //
      >
        <div>
          <img src={Traditiondress} alt="Tradition Dress" />
        </div>
        <div>
          <img src={Lights} alt="Lights" />
        </div>
        <div>
          <img src={Homedecor} alt="Homedecor" />
        </div>
        <div>
          <img src={Western} alt="Western" />
        </div>
        <div>
          <img src={Perfumes} alt="perfumes" />
        </div>
        <div>
          <img src={SmartPhones} alt="SmartPhones" />
        </div>
      </Carousel>
    </div>
  );
}
