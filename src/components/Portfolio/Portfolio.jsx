import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../projects/foodapp.jpg";
import Ecommerce from "../../projects/foodrescuee.jpg";
import HOC from "../../projects/livetrack.jpg";
import MusicApp from "../../projects/mfh.jpg";


import Sidebar1 from "../../projects/new.jpg";
import Ecommerce1 from "../../projects/neww.jpg";
import HOC1 from "../../projects/restutrant.jpg";
import MusicApp1 from "../../projects/rider.jpg";


import Sidebar2 from "../../projects/soulmatch.jpg";
import Ecommerce2 from "../../projects/supplier.jpg";
import HOC2 from "../../projects/tele.jpg";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>





        <SwiperSlide>
          <img src={Sidebar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC1} alt="" />
        </SwiperSlide>


        <SwiperSlide>
          <img src={Sidebar2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC2} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
